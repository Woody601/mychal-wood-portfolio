"use client";
import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Head from "next/head";
import {
  onAuthStateChanged,
  verifyBeforeUpdateEmail,
  updateEmail,
  EmailAuthProvider,
  reauthenticateWithCredential,
  updatePassword,
  updateProfile,
} from "firebase/auth";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { auth, storage } from "../firebase";
import styles from "./page.module.css";
import Button from "../components/Button/page";
import ReactCrop from "react-image-crop";
import ToggleSwitch from "../components/ToggleSwitch/page";
import "react-image-crop/dist/ReactCrop.css";
import ProtectedRoute from "../components/ProtectedRoute"; // Import the HOC
function Account() {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const [currentEmail, setCurrentEmail] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [currentPasswordType, setCurrentPasswordType] = useState("password");
  const [newPasswordType, setNewPasswordType] = useState("password");
  const [currentPassword, setCurrentPassword] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [isICOToggled, setICOToggled] = useState(false);
  const [isRuleOfThirds, setRuleOfThirds] = useState(false);
  const [newAvatar, setNewAvatar] = useState("");
  const [avatarFile, setAvatarFile] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [crop, setCrop] = useState("");
  const router = useRouter();
  const imageRef = useRef(null);
  const canvasRef = useRef(null);

  function onChange(e) {
    setCrop(e);
    setRuleOfThirds(true);
    setDisabled(true);
  }
  function onComplete(e) {
    setCrop(e);
    setRuleOfThirds(false);
    getCroppedImg(imageRef.current, crop);
  }

  function closeImageCropOverlay() {
    setICOToggled(false);
    document.getElementById("avatarInput").value = "";
    setTimeout(() => {
      setDisabled(true);
    }, 400);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setEmail(user.email || "");
        setCurrentEmail(user.email || "");
        setUsername(user.displayName || "");
        setAvatar(user.photoURL || "/public/blankprofile.png"); // Set to default if no avatar
      } else {
        return;
      }
    });

    return () => unsubscribe();
  }, [router]);

  useEffect(() => {
    const handleEscKeyDown = (event) => {
      if (event.key == "Escape" && isICOToggled) {
        closeImageCropOverlay();
      }
    };
    window.addEventListener("keydown", handleEscKeyDown);

    return () => {
      window.removeEventListener("keydown", handleEscKeyDown);
    };
  }, [isICOToggled]);

  if (!user) return null;

  const isUserNameValid = username && username !== user.displayName;
  const isEmailValid = email && email !== user.email;
  const isPasswordValid = password && currentPassword;

  const updateDisplayName = async (e) => {
    e.preventDefault();
    if (!isUserNameValid) return;

    try {
      await updateProfile(auth.currentUser, {
        displayName: username,
      });
      await updateEmail(auth.currentUser, email);
      // Profile updated!
    } catch (error) {
      console.error("Profile Error: ", error);
      alert(error);
    }
  };

  const handleUpdateEmail = async (e) => {
    e.preventDefault();

    if (email == currentEmail) {
      alert(
        "This is your current email address. Please enter a new email you would like to use.",
      );
      return;
    } else {
      verifyBeforeUpdateEmail(auth.currentUser, email).then(() => {
        // Email verification sent!
        alert("Email verification sent");
      });
    }
    try {
      await updateEmail(auth.currentUser, email);
      // Email updated!
    } catch (error) {
      console.error("Email Error: ", error);
      alert(error.message);
    }
  };

  const reauthenticate = async () => {
    const credential = EmailAuthProvider.credential(
      auth.currentUser.email,
      currentPassword,
    );
    try {
      await reauthenticateWithCredential(auth.currentUser, credential);
    } catch (error) {
      console.error("Re-authentication Error: ", error);
      alert("Re-authentication failed. Please check your current password.");
      throw error; // Rethrow the error to prevent further execution in case of failure
    }
  };
  function showPassword(type) {
    if (type == "current") {
      setCurrentPasswordType((prevType) =>
        prevType == "password" ? "text" : "password",
      );
    } else if (type == "new") {
      setNewPasswordType((prevType) =>
        prevType == "password" ? "text" : "password",
      );
    }
  }

  const handleUpdatePassword = async (e) => {
    e.preventDefault();
    try {
      await reauthenticate();
      await updatePassword(auth.currentUser, password);
      alert("Password updated successfully!");
    } catch (error) {
      console.error("Password Update Error: ", error);
      alert("An error occurred while updating the password: " + error.message);
    }
  };

  const handleAvatarChange = (e) => {
    if (e.target.files[0]) {
      setAvatarFile(e.target.files[0]);
      setNewAvatar(URL.createObjectURL(e.target.files[0]));
      setCrop({ aspect: 1 / 1 });
      setICOToggled(true);
    } else if (e.target.files[null]) {
      alert("Please select an image to upload.");
      setICOToggled(false);
    }
  };

  const getCroppedImg = (image, crop) => {
    const canvas = canvasRef.current;
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    const ctx = canvas.getContext("2d");
    canvas.width = crop.width;
    canvas.height = crop.height;

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height,
    );

    return new Promise((resolve, reject) => {
      canvas.toBlob((blob) => {
        if (!blob) {
          setDisabled(true);
          return;
        }
        if (disabled && blob != null) {
          setDisabled(false);
        }
        if (disabled && blob == null) {
          reject(new Error("Canvas is empty"));
        }
        blob.name = avatarFile.name;
        resolve(blob);
      }, "image/jpeg");
    });
  };

  const handleUpdateAvatar = async (e) => {
    e.preventDefault();
    if (!avatarFile || !crop) {
      alert("Please select and crop an image to upload.");
      return;
    }
    if (canvasRef == null) {
      alert("Canvas is null. Please refresh the page and try again.");
      return;
    } else {
      const croppedImageBlob = await getCroppedImg(imageRef.current, crop);

      const storageRef = ref(storage, `avatars/${auth.currentUser.uid}`);
      try {
        closeImageCropOverlay();
        await uploadBytes(storageRef, croppedImageBlob);
        const photoURL = await getDownloadURL(storageRef);
        setAvatar(photoURL);
        await updateProfile(auth.currentUser, { photoURL });
        alert("Avatar updated successfully!");
      } catch (error) {
        console.error("Avatar Error: ", error);
        alert("An error occurred while updating the avatar: " + error.message);
      }
    }
  };
  // function showCurrentPassword() {
  //   if (currentPasswordType == "password") {
  //     setCurrentPasswordType("text");
  //   }
  //   else if (currentPasswordType == "text") {
  //     setCurrentPasswordType("password")
  //   }
  // }
  return (
    <>
      <Head>
        <title>Account</title>
      </Head>
      <div className={styles.settingsContainer}>
        <h1>Account Settings</h1>
        <form
          id="avatarUpload"
          method="post"
          className={styles.sectionContainer}
          onSubmit={handleUpdateAvatar}
        >
          <div className={isICOToggled ? "overlay active" : "overlay"}>
            <div className={styles.overlayContent}>
              <div className={styles.overlayBody}>
                <ReactCrop
                  crop={crop}
                  onChange={(c) => onChange(c)}
                  aspect={1}
                  onComplete={(c) => onComplete(c)}
                  centerCrop={true}
                  minWidth={50}
                  minHeight={50}
                  maxWidth={350}
                  maxHeight={350}
                  circularCrop={true}
                  ruleOfThirds={isRuleOfThirds}
                  className={styles.AvatarWrapper}
                >
                  <img
                    ref={imageRef}
                    src={newAvatar}
                    alt="Avatar"
                    className={styles.userAvatar}
                  />
                </ReactCrop>
              </div>
              <div className={styles.sectionDivider} />
              <div className={styles.overlayFooter}>
                <Button type="button" onClick={closeImageCropOverlay}>
                  Cancel
                </Button>
                <Button type="submit button" disabled={disabled}>
                  Set Avatar
                </Button>
              </div>
            </div>
          </div>
          <div className={styles.sectionBody + " " + styles.avatar}>
            <img
              src={avatar}
              alt="Avatar"
              className={styles.userAvatar}
              onClick={() => document.getElementById("avatarInput").click()}
            />
            <h4>Avatar</h4>
            <p>
              This is your avatar. <br /> Click on the avatar to upload a custom
              one from your files.
            </p>

            <input
              id="avatarInput"
              type="file"
              accept="image/*"
              onChange={handleAvatarChange}
              required
              style={{ display: "none" }}
            ></input>
            <canvas ref={canvasRef} style={{ display: "none" }} />
          </div>
          <div className={styles.sectionDivider} />
          <div className={styles.sectionFooter}>
            <p>An avatar is optional but strongly recommended.</p>
          </div>
        </form>
        <form
          method="post"
          className={styles.sectionContainer}
          onSubmit={updateDisplayName}
        >
          <div className={styles.sectionBody}>
            <h4 htmlFor="username">Display Name</h4>
            <p>
              Please enter your full name, or a display name you are comfortable
              with.
            </p>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              maxLength="32"
              required
            />
          </div>
          <div className={styles.sectionDivider} />
          <div className={styles.sectionFooter}>
            <p>Please use 32 characters at maximum.</p>
            <Button type="submit button" disabled={!isUserNameValid}>
              Save
            </Button>
          </div>
        </form>
        <form
          method="post"
          className={styles.sectionContainer}
          onSubmit={handleUpdateEmail}
        >
          <div className={styles.sectionBody}>
            <h4>Email</h4>
            <p>Enter the email addresses you want to use to log in with.</p>
            <input
              id="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={styles.sectionDivider} />
          <div className={styles.sectionFooter}>
            <p>
              Emails must be verified to be able to login with them or be used
              as primary email.
            </p>
            <Button type="submit button" disabled={!isEmailValid}>
              Save
            </Button>
          </div>
        </form>
        <form
          method="post"
          className={styles.sectionContainer}
          onSubmit={handleUpdatePassword}
        >
          <div className={styles.sectionBody}>
            <h4>Password</h4>
            <p>
              To change your password, enter your current password and set a new
              one.
            </p>
            {/* <div className="inputContainer">
            <input
              id="currentPassword"
              type={currentPasswordType}
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              placeholder="Current Password"
              minLength={6}
              required
            />
                <ToggleSwitch icon1="eye" icon2="eye-slash" onChange={showCurrentPassword} id='show-password' name='show-password' title1="Show Password" title2="Hide Password" type="checkbox" icontype="fa4"/>             
          </div> */}

            <div className="inputContainer">
              <input
                id="currentPassword"
                type={currentPasswordType}
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                placeholder="Current Password"
                minLength={6}
                required
              />
              <div className="containerButtons">
                <ToggleSwitch
                  icon1="eye"
                  icon2="eye-slash"
                  onChange={() => showPassword("current")}
                  id="show-current-password"
                  name="show-current-password"
                  title1="Show Password"
                  title2="Hide Password"
                  type="checkbox"
                  icontype="fa4"
                />
              </div>
            </div>
            <div className="inputContainer">
              <input
                id="password"
                type={newPasswordType}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="New Password"
                minLength={6}
                autoComplete="new-password"
                required
              />
              <div className="containerButtons">
                <ToggleSwitch
                  icon1="eye"
                  icon2="eye-slash"
                  onChange={() => showPassword("new")}
                  id="show-password"
                  name="show-password"
                  title1="Show Password"
                  title2="Hide Password"
                  type="checkbox"
                  icontype="fa4"
                />
              </div>
            </div>
          </div>
          <div className={styles.sectionDivider} />
          <div className={styles.sectionFooter}>
            <p>
              Ensure your new password is unique and is not easily guessable.
            </p>
            <Button type="submit button" disabled={!isPasswordValid}>
              Save
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
export default ProtectedRoute(Account); // Wrap with the HOC

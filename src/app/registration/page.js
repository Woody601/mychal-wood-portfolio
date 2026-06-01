"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Head from "next/head";
import { auth } from "../firebase";
ToggleSwitch;
import Button from "../components/Button/page";
import ToggleSwitch from "../components/ToggleSwitch/page";
import styles from "./page.module.css";
import {
  onAuthStateChanged,
  verifyBeforeUpdateEmail,
  updateEmail,
  EmailAuthProvider,
  reauthenticateWithCredential,
  updatePassword,
  updateProfile,
} from "firebase/auth";
export default function FinalizeSignupPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const [confirmPasswordType, setConfirmPasswordType] = useState("password");
  const router = useRouter();
  useEffect(() => {
    // Check if the user is already logged in=
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // Ensures that a user is logged in, to continue with finishing registration.
      if (user && user.displayName) {
        // Redirect to the dashboard if the user is logged in
        router.push("/dashboard");
      }
      if (!user) {
        router.push("/login");
      }
    });

    // Clean up the listener on component unmount
    return () => unsubscribe();
  }, [router]);
  function showPassword() {
    setPasswordType((prevType) =>
      prevType == "password" ? "text" : "password",
    );
  }

  function showConfirmPassword() {
    setConfirmPasswordType((prevType) =>
      prevType == "password" ? "text" : "password",
    );
  }

  const handleFinalizeSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      const user = auth.currentUser;

      // Update the user's profile with username
      if (username) {
        await updateProfile(user, { displayName: username });
      }

      router.push("/dashboard");
    } catch (error) {
      console.error("Finalize Signup Error: ", error);
      alert(error.message);
    }
  };

  return (
    <>
      <Head>
        <title>Finalize Registration</title>
      </Head>
      <>
        <form method="post" className="form" onSubmit={handleFinalizeSignup}>
          <h3>Finalize Registration</h3>
          <div className="container">
            <div className="section">
              <label htmlFor="username">Username</label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="section">
              <label htmlFor="psw">New Password</label>
              <div className="inputContainer">
                <input
                  id="psw"
                  type={passwordType}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <ToggleSwitch
                  icon1="eye"
                  icon2="eye-slash"
                  onChange={showPassword}
                  id="show-password"
                  name="show-password"
                  title1="Show Password"
                  title2="Hide Password"
                  type="checkbox"
                  icontype="fa4"
                />
              </div>
            </div>
            <div className="section">
              <label htmlFor="confirmPsw">Confirm Password</label>
              <div className="inputContainer">
                <input
                  id="confirmPsw"
                  type={confirmPasswordType}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <ToggleSwitch
                  icon1="eye"
                  icon2="eye-slash"
                  onChange={showConfirmPassword}
                  id="show-confirm-password"
                  name="show-confirm-password"
                  title1="Show Password"
                  title2="Hide Password"
                  type="checkbox"
                  icontype="fa4"
                />
              </div>
            </div>
            <Button type="submit" className="buttomform">
              Finalize Registration
            </Button>
          </div>
        </form>
      </>
    </>
  );
}

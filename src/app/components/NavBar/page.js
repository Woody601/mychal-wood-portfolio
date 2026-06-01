"use client";
import { useEffect, useState, useCallback, useRef } from "react";
import Link from "next/link";
import styles from "./page.module.css";
// import Cookie from "js-cookie";
// import Image from "next/image";
// import Icon from "../Icon/page";
// import ToggleSwitch from "../ToggleSwitch/page";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { auth } from "../../firebase";
// import SubNav from "./NavDropDown/page";

export default function NavBar() {
  const [screenWidth, setScreenWidth] = useState(0);
  const [isToggled, setToggled] = useState(false);

  // const [isAvatarToggled, setAvatarToggled] = useState(false);
  // const [user, loading, error] = useAuthState(auth);
  // const [username, setUsername] = useState("");
  // const [currenEmail, setCurrentEmail] = useState("");

  // const [avatar, setAvatar] = useState("");
  // const [theme, setTheme] = useState("");
  // const userMenuRef = useRef(null);
  // Close nav if screen size changes to desktop
  useEffect(() => {
    if (screenWidth >= 784 && isToggled) {
      setToggled(false);
    }
  }, [screenWidth, isToggled]);

  const toggleNav = () => {
    if (screenWidth <= 783) {
      setToggled(!isToggled);
    }
  };

  const closeNav = useCallback(() => {
    if (isToggled) {
      setToggled(false);
    }
  }, [isToggled]);
  const handleLogout = async () => {
    try {
      await signOut(auth);
      closeNav();
    } catch (error) {
      console.error("Logout Error: ", error);
    }
  };
  const updateScreenWidth = () => {
    setScreenWidth(window.innerWidth);
  };
  // const toggleAvatar = () => {
  //   setAvatarToggled(!isAvatarToggled);
  // };
  // const closeAvatar = () => {
  //   if (screenWidth > 769) {
  //     setAvatarToggled(false);
  //   }
  // };

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (
  //       screenWidth >= 769 &&
  //       userMenuRef.current &&
  //       !userMenuRef.current.contains(event.target)
  //     ) {
  //       closeAvatar();
  //     }
  //   };

  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [screenWidth]);
  useEffect(() => {
    // Set initial screen width
    updateScreenWidth();
    window.addEventListener("resize", updateScreenWidth);

    // Handle Escape key
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isToggled) {
        e.preventDefault();
        closeNav();
      }
    };

    // Handle Android back button
    const handlePopState = (e) => {
      if (isToggled) {
        e.preventDefault();
        closeNav();
        // Push the current state back to prevent actual navigation
        window.history.pushState(null, "", window.location.pathname);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("resize", updateScreenWidth);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("popstate", handlePopState);
    };
  }, [isToggled, closeNav]); // Add isToggled to dependency array

  return (
    <>
      <nav className={`${styles.navHolder} ${isToggled ? styles.active : ""}`}>
        <Link
          className={`${styles.item} ${styles.title}`}
          onClick={closeNav}
          href="/"
        >
          Mychal Wood
        </Link>

        <div
          className={`${styles.bars} ${isToggled ? styles.active : ""}`}
          onClick={toggleNav}
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
        <div className={styles.menuContainer}>
          <div className={styles.menuTop}>
            <p>Menu</p>
            <div
              className={`${styles.bars} ${isToggled ? styles.active : ""}`}
              onClick={toggleNav}
            >
              <span className={styles.bar}></span>
              <span className={styles.bar}></span>
              <span className={styles.bar}></span>
            </div>
          </div>

          <div className={styles.itemsContainer}>
            <div className={styles.items}>
              <Link href="/" onClick={closeNav} className={styles.item}>
                Home
              </Link>
              <Link href="/about" onClick={closeNav} className={styles.item}>
                About
              </Link>
              <Link href="/projects" onClick={closeNav} className={styles.item}>
                Projects
              </Link>
              <Link href="/resume" onClick={closeNav} className={styles.item}>
                Resume
              </Link>
              <Link href="/contact" onClick={closeNav} className={styles.item}>
                Contact
              </Link>
            </div>
            {/* <div className={styles.items}>
              {user ? (
                <div ref={userMenuRef} className="userProfile">
                  <Image
                    priority
                    src={avatar}
                    alt="user"
                    width={40}
                    height={40}
                    draggable="false"
                    quality={100}
                    className="profilePic"
                    onClick={() => toggleAvatar()}
                  />
                  <ul
                    className="dropdown-content"
                    style={{ display: isAvatarToggled ? "block" : "none" }}
                  >
                    <div className="userDetails">
                      <p className="userName">{user.displayName}</p>
                      <p className="userEmail">{user.email}</p>
                    </div>
                    <li className="sectionDivider" />
                    <li onClick={closeAvatar}>
                      <Link href="/devices" onClick={toggleNav}>
                        Devices
                      </Link>
                    </li>
                    <li onClick={closeAvatar}>
                      <Link href="/items" onClick={toggleNav}>
                        Items
                      </Link>
                    </li>
                    <li onClick={closeAvatar}>
                      <Link href="/dashboard" onClick={toggleNav}>
                        Dashboard
                      </Link>
                    </li>
                    <li onClick={closeAvatar}>
                      <Link href="/account" onClick={toggleNav}>
                        Account Settings
                        <Icon icon="settings" type="google outlined" />
                      </Link>
                    </li>
                    <li className="sectionDivider" />
                    <li className="themeSetting">
                      Theme
                      <form className="themeSwitch" id="themeSwitch">
                        <ToggleSwitch
                          icon1="computer"
                          type="radio"
                          id="device"
                          name="theme"
                          value="device"
                          title="system theme"
                          checked={theme == "device"}
                          onChange={themeChange}
                          icontype="google outlined"
                        />
                        <ToggleSwitch
                          icon1="light_mode"
                          type="radio"
                          id="light"
                          name="theme"
                          value="light"
                          title="light theme"
                          checked={theme == "light"}
                          onChange={themeChange}
                          icontype="google outlined"
                        />
                        <ToggleSwitch
                          icon1="dark_mode"
                          icontype="google outlined"
                          type="radio"
                          id="dark"
                          name="theme"
                          value="dark"
                          title="dark theme"
                          checked={theme == "dark"}
                          onChange={themeChange}
                        />
                      </form>
                    </li>
                    <li className="sectionDivider" />
                    <li onClick={closeAvatar}>
                      <Link href="" onClick={handleLogout}>
                        Log Out
                        <Icon icon="logout" type="google outlined" />
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                <li>
                  <Link href="/login" onClick={toggleNav}>
                    Sign In
                  </Link>
                </li>
              )}
            </div> */}
          </div>
        </div>
        <div
          className={`${styles.overlay} ${isToggled ? styles.active : ""}`}
          onClick={closeNav}
        />
      </nav>
    </>
  );
}

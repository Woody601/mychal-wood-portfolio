"use client";
import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";
// import SubNav from "./NavDropDown/page";

export default function NavBar() {
  const [screenWidth, setScreenWidth] = useState(0);
  const [isToggled, setToggled] = useState(false);

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

  const updateScreenWidth = () => {
    setScreenWidth(window.innerWidth);
  };

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
              <Link href="/contact" onClick={closeNav} className={styles.item}>
                Sign In
              </Link>
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

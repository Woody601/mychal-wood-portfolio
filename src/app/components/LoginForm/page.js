"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "../../../app/firebase";

import Button from "../Button/page";
import ToggleSwitch from "../ToggleSwitch/page";
import styles from "./page.module.css";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");

  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push("/dashboard");
      }
    });

    return () => unsubscribe();
  }, [router]);

  const showPassword = () => {
    setPasswordType((prev) => (prev === "password" ? "text" : "password"));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/dashboard");
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("The password is incorrect.");
          break;

        case "auth/user-not-found":
          alert("The user was not found.");
          break;

        case "auth/too-many-requests":
          alert(
            "This account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or try again later.",
          );
          break;

        default:
          alert(
            "The email and password did not match any account in our system.",
          );
      }
    }
  };

  return (
    <form method="post" className={styles.form} onSubmit={handleLogin}>
      <h3>Login</h3>

      <div className={styles.section}>
        <label htmlFor="email">Email</label>

        <input
          className={styles.input}
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className={styles.section}>
        <label htmlFor="psw">Password</label>

        <div className={styles.inputContainer}>
          <input
            className={styles.input}
            id="psw"
            type={passwordType}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className={styles.containerButtons}>
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
      </div>

      <Button type="submit" className="buttomform">
        Log In
      </Button>

      <span className={styles.psw}>
        <Link href="/login/passwordreset">Forgot your password?</Link>
      </span>
    </form>
  );
}

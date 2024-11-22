"use client";
import React from "react";
import styles from "@/app/css/styles.module.css";
import { useRouter } from "next/navigation"; // New import for App Router
import Head from "next/head";
import { Button } from "semantic-ui-react";

export default function Contact() {
  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [message, setMessage] = React.useState("");
  // let fullName = "Mychal Wood"
  // let email = "mychwood@iu.edu"

  const router = useRouter();
  function contactFormSubmit(e) {
    e.preventDefault();
    if (fullName !== "" && email !== "" && subject !== "" && message !== "") {
      router.push("/contact/success");
    }
    console.log(fullName, email, subject, message);
  }

  function updateContactInfo(e) {
    // console.log(e.currentTarget.name, e.currentTarget.value)
    if (e.currentTarget.name == "fullName") {
      setFullName(e.currentTarget.value);
    }
    if (e.currentTarget.name == "email") {
      setEmail(e.currentTarget.value);
    }
    if (e.currentTarget.name == "subject") {
      setSubject(e.currentTarget.value);
    }
    if (e.currentTarget.name == "message") {
      setMessage(e.currentTarget.value);
    }
  }

  return (
    <>
      <h1 className="hero">Contact</h1>
      <form className={styles.form} onSubmit={contactFormSubmit}>
        <div className={styles.formField}>
          <label>Name:</label>
          <input
            name="fullName"
            type="text"
            placeholder="Name:"
            onChange={updateContactInfo}
            value={fullName}
            required
          />
          <label>Email:</label>
          <input
            name="email"
            type="email"
            placeholder="Email:"
            onChange={updateContactInfo}
            value={email}
            required
          />
          <label>Subject:</label>
          <input
            name="subject"
            type="text"
            placeholder="Subject:"
            onChange={updateContactInfo}
            value={subject}
            required
          />
          <label>Message:</label>
          <textarea
            name="message"
            placeholder="Message:"
            onChange={updateContactInfo}
            value={message}
            required
          />
          <Button className="button" type="submit" value="Submit">
            Submit
          </Button>
        </div>
      </form>
    </>
  );
}

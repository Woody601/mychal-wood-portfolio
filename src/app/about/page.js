"use client";
import React from "react";
import styles from "../css/styles.module.css";
import { Button } from "../components/Button/page";

export default function About() {
  return (
    <>
      <section>
        <h1 className="hero">About</h1>
        <p>
          I'm Mychal Wood, a Full Stack Web Developer located in the Greater
          Indianapolis area.
        </p>
        <img src="Mychal_Wood.jpg" className={styles.portrait} />
      </section>
      <section>
        <h1>Front End Development</h1>
        <p>
          I am well versed in a variety of tools and software, when it comes to
          designing for the front end. Some of said tools and software are:
        </p>
        <ul>
          <li>
            <p>NextJS</p>
          </li>
          <li>
            <p>React</p>
          </li>
          <li>
            <p>Git</p>
          </li>
          <li>
            <p>Visual Studio</p>
          </li>
          <li>
            <p>Sass</p>
          </li>
        </ul>
      </section>
    </>
  );
}

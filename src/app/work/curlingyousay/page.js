"use client";

import React from "react";
import { Button, Link } from "semantic-ui-react";
import "@/app/css/Home.module.css";
export default function CurlingYouSay() {
  return (
    <section>
      <h1 className="hero">Curling You Say? Website</h1>
      <h1>About this Project</h1>
      <p>
        This website is a project that I am working on with some other people to
        create our own type of curling website. We are using NextJS to create
        the website. If you decide to visit the site, just know that it is
        currently in development and may not be fully functional.
      </p>
      <h1>Software used</h1>
      <p>
        Here are the tools and software that we are using to make our website:
      </p>
      <ul>
        <li>
          <p>React</p>
        </li>
        <li>
          <p>Sass</p>
        </li>
        <li>
          <p>Visual Studio</p>
        </li>
        <li>
          <p>NextJS</p>
        </li>
      </ul>
      <h1>Live Demo</h1>
      <p>Here is a link to a live demo of our website:</p>
      <Button
        as={Link}
        href="https://curling-you-say.vercel.app"
        className="button"
      >
        Visit Site
      </Button>
    </section>
  );
}

"use client";

import React from "react";
import { Button, Link } from "semantic-ui-react";
import "@/app/css/Home.module.css";
export default function IndyLaserDesigns() {
  return (
    <section>
      <h1 className="hero">Indy Laser Designs Website</h1>
      <h1>About this Project</h1>
      <p>
        This website is an overhaul of the Indy Laser Designs site, the business
        that my parents bought back in late 2018. I have made multiple
        renditions of said website, and have yet to compile all of what I have
        into one ultimate website, which will be my goal of this year. The
        website they currently have, is outdated and needs a refresher soon.
      </p>
      <h1>Software used</h1>
      <p>
        Here are some of the tools and software that I used to make said website
        and front-end:
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
      <p>Here is a link to a live demo of the website:</p>
      <Button
        as={Link}
        href="https://n299-final-portfolio.vercel.app/"
        className="button"
      >
        Visit Site
      </Button>
    </section>
  );
}

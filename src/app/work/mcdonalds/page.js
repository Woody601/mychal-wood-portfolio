"use client";
import React from "react";
import "@/app/css/Home.module.css";
export default function McDonalds() {
  return (
    <section>
      <h1 className="hero">McDonalds Database</h1>
      <h1>About this Project</h1>
      <p>
        This McDonalds database was made by me and a couple of other people, to
        learn more about creating databases. We took information that was out on
        McDonald's website to then create a database and front end design,
        listing out nutritional information on the different menu items they
        have.
      </p>
      <h1>Software used</h1>
      <p>
        Here are some of the tools and software that we used to make said
        database and front-end:
      </p>
      <ul>
        <li>
          <p>React</p>
        </li>
        <li>
          <p>MariaDB</p>
        </li>
        <li>
          <p>Visual Studio</p>
        </li>
      </ul>
    </section>
  );
}

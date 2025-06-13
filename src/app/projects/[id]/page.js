"use client";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/app/firebase";
import { Button, Link } from "semantic-ui-react";

import React from "react";
import "@/app/css/Home.module.css";
export default async function ProjectDetail({ params }) {
  const { id } = params;

  const docRef = doc(db, "projects", id);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    return <div>Project not found.</div>;
  }

  const project = docSnap.data();

  return (
    <section>
      <h1 className="hero">{project.title}</h1>

      <h1>About this Project</h1>
      <p>{project.longDescription}</p>
      <h1>Software used</h1>
      <p>Here are the tools and software that were used:</p>

      <ul>
        {project.softwareUsed?.map((software, index) => (
          <li key={index}>
            <p>{software}</p>
          </li>
        ))}
      </ul>
      {project.demoURL && (
        <>
          <h1>Live Demo</h1>
          <p>Here is a link to a live demo of the website:</p>
          <Button as={Link} href={project.demoURL} className="button">
            Visit Site
          </Button>
        </>
      )}
    </section>
  );
}

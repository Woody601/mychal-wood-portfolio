"use client";
import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

export default function WorkProject(props) {
  const { src, project, title, description } = props;
  return (
    <Link href={`/projects/${project}`} className={styles.projectitem}>
      <img src={src} />
      <h3>{title}</h3>
      <p>{description}</p>
    </Link>
  );
}

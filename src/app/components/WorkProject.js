"use client";
import React from "react";
import styles from "@/app/css/styles.module.css";
import { Image } from "semantic-ui-react";
import Link from "next/link";

export default function WorkProject(props) {
  const { src, project, title, description } = props;
  return (
    <Link href={`/work/${project}`} className={styles.projectitem}>
      <Image src={src} />
      <h3>{title}</h3>
      <p>{description}</p>
    </Link>
  );
}

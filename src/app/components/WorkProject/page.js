"use client";
import React from "react";
import styles from "./page.module.scss";
import Link from "next/link";
import Image from "next/image";
export default function WorkProject(props) {
  const { src, project, title, description } = props;
  return (
    <Link href={`/projects/${project}`} className={styles.projectitem}>
      <div className={styles.cardTop}>
        <Image src={src} width={350} height={200} alt={title} quality={100} />
      </div>
      <div className={styles.cardBottom}>
        <h3>{title}</h3>
        {/* <p>{description}</p> */}
      </div>
    </Link>
  );
}

"use client"
import React from "react"
import styles from "@/app/css/styles.module.css"
import { Button, Image } from "semantic-ui-react"
import Link from "next/link"

export default function WorkProject(props) {
  const { src, project, title } = props
  return (
    <>
      <div className={styles.workProject}>
        <Image src={src} />
        <h3>{title}</h3>
        <Button as={Link} href={`/work/${project}`} className="inverted">
          View Project
        </Button>
      </div>
    </>
  )
}

"use client"
import React from "react"
import Head from "next/head"
import { Button, Grid } from "semantic-ui-react"
import WorkProject from "@/app/components/WorkProject"
import "@/app/css/Home.module.css"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="hero home">
      <h2>Hello There! I'm</h2>
      <h1>Mychal Wood</h1>
        <h2>Gamer, Web Designer, and Front End Developer.</h2>
        <Button as={Link} href="/about">
          About Me
        </Button>
      </section>
      <div className="section">
        <h1>Projects I've Completed</h1>
        <h2>Here is some work that I have done in the past.</h2>
        <Button as={Link} href="/work">
          View Work
        </Button>
      </div>
    </>
  )
}

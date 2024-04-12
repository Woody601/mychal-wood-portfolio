import React from "react";
import Head from 'next/head'
import { Button, Grid } from 'semantic-ui-react';
import WorkProject from "@/components/WorkProject";
import "@/styles/Home.module.css";
import Link from 'next/link';
export default function Home() {

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="hero home">
        <h1>Mychal Wood</h1>
      </section>
      <div className="section">
        <h1>Hello There! I'm Mychal Wood</h1>
        <h2>Gamer, Web Designer, and Front End Developer.</h2>
      <Button as={Link} href='/about' className="button">About Me</Button>
      </div>
      <div className="section">
      <h1>Projects I've Completed</h1>
      <h2>Here is some work that I have done in the past.</h2>
      <Button as={Link} href='/work' className="button">View Work</Button>
      </div>
    </>
  )
}
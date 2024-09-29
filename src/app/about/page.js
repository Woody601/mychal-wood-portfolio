"use client"
import React from "react"
import styles from "../css/styles.module.css"
import Head from "next/head"
import {
  Image,
  Grid,
  GridRow,
  GridColumn,
  Header,
  Button,
  Link,
} from "semantic-ui-react"
import "../css/Home.module.css"
export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="hero">
        <h1>About</h1>
      </section>

      <Grid columns="1" verticalAlign="center">
        <Grid.Row columns={1}>
          <Grid.Column mobile={12} tablet={10} computer={8} textAlign="center">
            <p>
              I'm Mychal Wood, a Full Stack Web Developer located in the Greater
              Indianapolis area.
            </p>
            <Image
              size="medium"
              src="Mychal_Wood.jpg"
              className={styles.portrait}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1}>
          <h1>Front End Development</h1>
          <p>
            I am well versed in a variety of tools and software, when it comes
            to designing for the front end. Some of said tools and software are:
          </p>
        </Grid.Row>
        <Grid.Row columns={1}>
          <ul>
            <li>
              <p>NextJS</p>
            </li>
            <li>
              <p>React</p>
            </li>
            <li>
              <p>Git</p>
            </li>
            <li>
              <p>Visual Studio</p>
            </li>
            <li>
              <p>Sass</p>
            </li>
          </ul>
        </Grid.Row>
        <Grid.Row columns={1}>
          <Grid.Column mobile={12} tablet={10} computer={8} textAlign="center">
            <h1>Contact Me</h1>
            <p>
              Want to get in touch with me? Click the button below and fill out
              the form!
            </p>
            <Button as={Link} href="/contact" className="button">
              Contact
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  )
}

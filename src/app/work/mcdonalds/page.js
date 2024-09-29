"use client"
import React from "react"
import Head from "next/head"
import { Grid } from "semantic-ui-react"
import "@/app/css/Home.module.css"
export default function McDonalds() {
  return (
    <>
      <Head>
        <title>McDonalds Database Project</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="hero">
        <h1>McDonalds Database</h1>
      </section>

      <Grid columns="1" verticalAlign="center">
        <Grid.Row columns={1}>
          <Grid.Column mobile={12} tablet={10} computer={8} textAlign="center">
            <h1>About this Project</h1>
            <p>
              This McDonalds database was made by me and a couple of other
              people, to learn more about creating databases. We took
              information that was out on McDonald's website to then create a
              database and front end design, listing out nutritional information
              on the different menu items they have.
            </p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1}>
          <h1>Software used</h1>
          <p>
            Here are some of the tools and software that we used to make said
            database and front-end:
          </p>
        </Grid.Row>
        <Grid.Row columns={1}>
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
        </Grid.Row>
      </Grid>
    </>
  )
}

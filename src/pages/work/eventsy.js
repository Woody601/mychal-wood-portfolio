import React from "react";
import Head from 'next/head'
import { Grid } from 'semantic-ui-react';
import  "@/styles/Home.module.css"
export default function Eventsy() {

  return (
    <>
      <Head>
        <title>Eventsy Website</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="hero">
        <h1>Eventsy Website</h1>
      </section>
      
      <Grid columns='1' verticalAlign="center">     
        <Grid.Row columns={1}>
          <Grid.Column mobile={12} tablet={10} computer={8} textAlign="center">
            <h1>About this Project</h1>
          <p>
        This Eventsy was a website I made in a web development bootcamp I took in the fall of 2023, and was the start of my more advanced website development techniques and software. This was made by replicating the website, and it's spacing using an Adobe XD file template.  
      </p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1}>
        <h1>
              Software used
            </h1>
            <p>
              Here are some of the tools and software that we used to make said database and front-end:
            </p>
            </Grid.Row>
            <Grid.Row columns={1}>
              <ul>
                <li>
                  <p>jQuery</p>
                </li>
                <li>
                  <p>Visual Studio</p>
                </li>   
                <li>
                  <p>Sass</p>
                </li>   
                  </ul>
            </Grid.Row>
        </Grid>
          </>
  )
}
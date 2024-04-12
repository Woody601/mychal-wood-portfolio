import React from "react";
import Head from 'next/head'
import { Grid, Button, Link} from 'semantic-ui-react';
import  "@/styles/Home.module.css"
export default function IndyLaserDesigns() {

  return (
    <>
      <Head>
        <title>Indy Laser Designs Website</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="hero">
        <h1>McDonalds Database</h1>
      </section>
      
      <Grid columns='1' verticalAlign="center">     
        <Grid.Row columns={1}>
          <Grid.Column mobile={12} tablet={10} computer={8} textAlign="center">
            <h1>About this Project</h1>
          <p>
        This website is an overhaul of the Indy Laser Designs site, the business that my parents bought back in late 2018. I have made multiple renditions of said website, and have yet to compile all of what I have into one ultimate website, which will be my goal of this year. The website they currently have, is outdated and needs a refresher soon.  
      </p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1}>
        <h1>
              Software used
            </h1>
            <p>
              Here are some of the tools and software that I used to make said website and front-end:
            </p>
            </Grid.Row>
            <Grid.Row columns={1}>
              <ul>
                <li>
                  <p>React</p>
                </li>
                <li>
                  <p>Sass</p>
                </li>
                <li>
                  <p>Visual Studio</p>
                </li>
                <li>
                  <p>NextJS</p>
                </li> 
                  </ul>
            </Grid.Row>
            <Grid.Row columns={1}>
                <h1>Live Demo</h1>
                <p>Here is a link to a live demo of the website:</p>
                <Button as={Link} href='https://n299-final-portfolio.vercel.app/' className="button">Visit Site</Button>
            </Grid.Row>
        </Grid>
          </>
  )
}
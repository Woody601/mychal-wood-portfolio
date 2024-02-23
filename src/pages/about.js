import React from "react";
import styles from "@/styles/styles.module.css";
import Head from 'next/head'
import { Image, Grid, Header} from 'semantic-ui-react';
import  "@/styles/Home.module.css"
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
      <Grid columns='1' verticalAlign="center">
              <Grid.Row columns={1}>
          <Grid.Column mobile={12} tablet={10} computer={8}><Header as='h4' textAlign="left">This is about me!</Header></Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1}>
          <Grid.Column mobile={12} tablet={10} computer={8} verticalAlign="center">
            <Image size="medium"src="Mychal_Wood.jpg" className={styles.portrait} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1}>
          <Grid.Column mobile={12} tablet={10} computer={8} textAlign="left">
          <p>
        Hello there, my name is Mychal Wood! I am currently a Senior at IUPUI
        pursuing the Full Stack program, where I'll be getting two Bachelor's
        degrees when I graduate: Informatics and Media Arts and Science with a
        specialization in Web Design and Development. I grew up and have lived
        in Beech Grove my entire life, so I am very familiar with the
        surrounding area. Scroll down to see some of my likes and interests!
      </p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1}>
          <Grid.Column mobile={12} tablet={10} computer={8} textAlign="left">
          <p>
        In my free time, I love to hang out with friends and family, watch TV,
        play videogames, build Legos, go camping, and much more! Some of my
        favorite video games are The Legend of Zelda, Mario Kart, Super Smash
        Bros Ultimate, Terraria, Fortnite, Minecraft, and the list goes on and
        on!
      </p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1}>
          <Grid.Column mobile={12} tablet={10} computer={8}>
            <Image src="SmashBros.jpg" className={styles.gamePicture} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1}>
          <Grid.Column mobile={12} tablet={10} computer={8}>
            <Image src="Zelda.jpg" className={styles.gamePicture} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1}>
          <Grid.Column mobile={12} tablet={10} computer={8} textAlign="left">
          <p>
        Also in my free time, I like to mess with various electronic things.
        From my 3D printer, to even my Raspberry Pi, there is a wide variety of
        things I like to mess with. I even plan on building a PC in the coming
        months to put the skills I've learned to the test, and to build one to
        game on! Also in high school, I was part of a Vex Robotics team, where I
        helped keep track of the engineering notebook and anything else that was
        needed at the time.
      </p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1}>
          <Grid.Column mobile={12} tablet={10} computer={8}><Header as='h1' textAlign="left">About This Project</Header></Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1}>
          <Grid.Column mobile={12} tablet={10} computer={8} textAlign="left">
          <p>
        This is my portfolio that I have been assigned to create in my N399 class. This project will allow me to create the ultimate portfolio, to show my sense of style, along with all of the work that I have done in the past.
      </p>
          </Grid.Column>
        </Grid.Row>
        </Grid>       
          </>
  )
}
import React from "react";
import Head from 'next/head'
import { Button, Grid, Message} from 'semantic-ui-react';
import WorkProject from "@/components/WorkProject";
import  "@/styles/Home.module.css"
import Link from 'next/link'
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
      <Grid centered inverted>
        <Grid.Row columns={1} verticalAlign="left">
        <Grid.Column width={8} verticalAlign="left"><Message>
    <Message.Header>Changes to the Site</Message.Header>
    <p>
    This website will continue to be updated over the course of my semester, improving each time to create the ultimate portfolio.
    </p>
  </Message>
  </Grid.Column>
        
        </Grid.Row>
      </Grid>
      <Grid centered>
      <Grid.Row columns={1}></Grid.Row>
        <Grid.Row columns={1}></Grid.Row>
        <Grid.Row columns={1}></Grid.Row>
        <Grid.Row columns={1}></Grid.Row>
        <Grid.Row columns={1}></Grid.Row>
        <Grid.Row columns={1}>
          <h1>Hello There, I'm Mychal Wood</h1>
        </Grid.Row><Grid.Row columns={1}>
          <h3>Gamer, Web Developer and Web Designer.</h3>
        </Grid.Row>
        <Grid.Row columns={1}>
        <Button as={Link} href='/about' className="inverted">ABOUT ME</Button>
        </Grid.Row>
        <Grid.Row columns={1}></Grid.Row>
        <Grid.Row columns={1}></Grid.Row>
        <Grid.Row columns={1}></Grid.Row>
        <Grid.Row columns={1}></Grid.Row>
        <Grid.Row columns={1}></Grid.Row>
        </Grid>
        <Grid centered>
      <Grid.Row columns={1}>
          <h1>Projects I've Completed</h1>
          
        </Grid.Row>
        <Grid.Row columns={1}>
        <h3>Here are the projects that I've worked on in the past.</h3>
        </Grid.Row>
      </Grid>
      <div class="work">
        <WorkProject src="/eventsy.png" project="eventsy" title="Eventsy Website"/>
        <WorkProject src="/mcdonalds.png" project="mcdonalds" title="McDonald's Database"/>
        <WorkProject src="/indylaserdesigns.png" project="indylaserdesigns" title="Indy Laser Designs Website"/> 
      </div>
    </>
  )
}
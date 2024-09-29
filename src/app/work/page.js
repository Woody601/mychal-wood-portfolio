import React from "react"
import Head from "next/head"
import { Grid } from "semantic-ui-react"
import WorkProject from "@/app/components/WorkProject"
export default function Materials() {
  return (
    <>
      <Head>
        <title>Work</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="hero">
        <h1>Work</h1>
      </section>
      <Grid centered>
        <Grid.Row columns={1}>
          <h1>Projects I've Completed</h1>
        </Grid.Row>
        <Grid.Row columns={1}>
          <h3>Here are the projects that I've worked on in the past.</h3>
        </Grid.Row>
      </Grid>
      <div className="work">
        <WorkProject
          src="/eventsy.png"
          project="eventsy"
          title="Eventsy Website"
        />
        <WorkProject
          src="/mcdonalds.png"
          project="mcdonalds"
          title="McDonald's Database"
        />
        <WorkProject
          src="/indylaserdesigns.png"
          project="indylaserdesigns"
          title="Indy Laser Designs Website"
        />
      </div>
    </>
  )
}

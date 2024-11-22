import React from "react";
import Head from "next/head";
import { Grid } from "semantic-ui-react";
import WorkProject from "@/app/components/WorkProject";
import styles from "@/app/css/work.module.css";
export default function Materials() {
  return (
    <>
      <Head>
        <title>Work</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div id={styles.project} className={styles.container}>
        <section>
          <h2 className={styles.sectiontitle}>My Projects</h2>
          <div className={styles.project}>
            <WorkProject
              src="/eventsy.png"
              project="eventsy"
              title="Eventsy Website"
              description="A dynamic event management website designed using an Adobe XD template, showcasing my advanced web development skills."
            />
            <WorkProject
              src="/mcdonalds.png"
              project="mcdonalds"
              title="McDonald's Database"
              description="Hello"
            />
            <WorkProject
              src="/indylaserdesigns.png"
              project="indylaserdesigns"
              title="Indy Laser Designs Website"
            />
            <WorkProject
              src="/indylaserdesigns.png"
              project="indylaserdesigns"
              title="Indy Laser Designs Website"
            />
          </div>
        </section>
      </div>
    </>
  );
}

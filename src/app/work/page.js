import React from "react";
import Head from "next/head";
import { Grid } from "semantic-ui-react";
import WorkProject from "@/app/components/WorkProject";
import styles from "@/app/css/work.module.css";
export default function Materials() {
  return (
    <div id={styles.project} className={styles.container}>
      <section>
        <h1 className="hero">Work</h1>
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
            description="A collaborative project to create a McDonald's database, using menu data to design a front-end display with nutritional information for various items."
          />
          <WorkProject
            src="/indylaserdesigns.png"
            project="indylaserdesigns"
            title="Indy Laser Designs Website"
            description="A redesign of my parents' business website, Indy Laser Designs, aimed at modernizing and streamlining the site to replace the outdated version."
          />
          <WorkProject
            src="/placeholder.png"
            project="curlingyousay"
            title="Curling You Say? Website"
            description="A collaborative project to create a custom curling website using React and Semantic UI, currently in development and not yet fully complete."
          />
        </div>
      </section>
    </div>
  );
}

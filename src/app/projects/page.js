// app/projects/page.js
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

import styles from "./page.module.css";
import WorkProject from "../components/WorkProject/page";

export default async function Projects() {
  const snapshot = await getDocs(collection(db, "projects"));
  const projects = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  // Separate into prioritized and non-prioritized entries
  const prioritized = projects
    .filter((entry) => entry.priority !== undefined)
    .sort((a, b) => a.priority - b.priority);

  const nonPrioritized = projects.filter(
    (entry) => entry.priority === undefined,
  );

  const orderedProjects = [...prioritized, ...nonPrioritized];

  return (
    <div id={styles.project} className={styles.container}>
      <section>
        <h1 className="hero">Projects</h1>
        <div className={styles.project}>
          {orderedProjects.map((entry) => (
            <WorkProject
              key={entry.id}
              src={entry.id + ".png"}
              project={entry.id}
              title={entry.title}
              description={entry.shortDescription}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

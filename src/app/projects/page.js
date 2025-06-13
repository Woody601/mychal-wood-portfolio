// app/projects/page.js
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import WorkProject from "@/app/components/WorkProject";
import styles from "@/app/css/work.module.css";

export default async function Projects() {
  const snapshot = await getDocs(collection(db, "projects"));
  const projects = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return (
    <div id={styles.project} className={styles.container}>
      <section>
        <h1 className="hero">Projects</h1>
        <div className={styles.project}>
          {projects.map((entry) => (
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

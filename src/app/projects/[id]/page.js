import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../app/firebase";
import Button from "../../../app/components/Button/page";
// Force dynamic rendering (important on canary)
export const dynamic = "force-dynamic";

export default async function ProjectDetail({ params }) {
  const { id } = await params; // ← This is the key change

  if (!id) {
    return <div>Invalid Project ID</div>;
  }

  const docRef = doc(db, "projects", id);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    return <div>Project not found.</div>;
  }

  const project = docSnap.data();

  return (
    <section>
      <h1 className="hero">{project.title}</h1>

      <h2>About this Project</h2>
      <p>{project.longDescription}</p>

      <h2>Software Used</h2>
      <p>Here are the tools and software that were used:</p>

      <ul>
        {project.softwareUsed?.map((software, index) => (
          <li key={index}>{software}</li>
        ))}
      </ul>

      {project.demoURL && (
        <>
          <h2>Live Demo</h2>
          <Button
            href={project.demoURL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Site
          </Button>
        </>
      )}
    </section>
  );
}

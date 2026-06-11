import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../app/firebase";
import Button from "../../../app/components/Button/page";
import Image from "next/image";

// Force dynamic rendering (important on canary)
export const dynamic = "force-dynamic";
export const metadata = {
  title: "Project Details",
};
export default async function ProjectDetail({ params }) {
  const { id } = await params; // ← This is the key change

  if (!id) {
    return <div>Invalid Project ID</div>;
  }

  const docRef = doc(db, "projects", id);
  const docSnap = await getDoc(docRef);
  const project = docSnap.data();

  if (!docSnap.exists() || project.visible == false) {
    return <div>Project not found.</div>;
  }

  return (
    <section>
      {project.title && <h1 className="hero">{project.title}</h1>}
      {/* <Image
        src={
          "https://firebasestorage.googleapis.com/v0/b/mychal-wood-portfolio.firebasestorage.app/o/projects%2Fscreenshots%2F" +
          id +
          ".png?alt=media"
        }
        width={500}
        height={"auto"}
        alt={project.title}
        quality={100}
      /> */}
      {project.longDescription && (
        <>
          <h2>About this Project</h2>
          <p>{project.longDescription}</p>
        </>
      )}
      {project.softwareUsed?.length > 0 && (
        <>
          <h2>Software Used</h2>
          <p>Here are the tools and software that were used:</p>

          <ul>
            {project.softwareUsed.map((software, index) => (
              <li key={index}>{software}</li>
            ))}
          </ul>
        </>
      )}

      {project.liveURL && (
        <>
          <h2>Live Site</h2>
          <Button
            href={project.liveURL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Site
          </Button>
        </>
      )}
      {project.demoURL && (
        <>
          <h2>Demo Website</h2>
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

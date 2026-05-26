import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import styles from "./page.module.css";
export const metadata = {
  title: "Resume",
};
export default async function Resume() {
  const snapshot = await getDocs(collection(db, "resume"));

  const resume = {};
  snapshot.forEach((doc) => {
    const data = doc.data();
    if (
      Object.keys(data).length === 1 &&
      Array.isArray(Object.values(data)[0])
    ) {
      resume[doc.id] = Object.values(data)[0];
    } else {
      resume[doc.id] = data;
    }
  });

  // === SORT EXPERIENCE BY ORDER FIELD ===
  if (resume.experience?.length) {
    resume.experience.sort((a, b) => {
      const orderA = typeof a.order === "number" ? a.order : 9999;
      const orderB = typeof b.order === "number" ? b.order : 9999;
      return orderA - orderB; // Lower order number appears first
    });
  }

  return (
    <div className={styles.resumeTable}>
      {resume.contactInfo && (
        <section className={styles.section}>
          <p className={styles.name}>{resume.contactInfo.name}</p>
          <table className={styles.contactTable}>
            <tbody>
              <tr>
                <td>
                  <span className={styles.contactText}>
                    {resume.contactInfo.location}
                  </span>
                </td>
                <td>
                  <a
                    href={"tel:" + resume.contactInfo.phone}
                    className={styles.contactText}
                    target="_blank"
                  >
                    {resume.contactInfo.phone}
                  </a>
                </td>
                <td>
                  <a
                    href={"mailto:" + resume.contactInfo.email}
                    className={styles.contactText}
                    target="_blank"
                  >
                    {resume.contactInfo.email}
                  </a>
                </td>
                <td>
                  <a
                    href={"https://" + resume.contactInfo.linkedin}
                    className={styles.contactText}
                    target="_blank"
                  >
                    {resume.contactInfo.linkedin}
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      )}

      {resume.education && (
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Education</h2>
          <table>
            <tbody>
              {resume.education.map((edu, i) => (
                <tr key={i}>
                  <td>
                    <p className={styles.title}>{edu.school}</p>
                    <p>{edu.degree}</p>
                  </td>
                  <td className={styles.rightAlign}>
                    <p>{edu.location}</p>
                    <p>Graduated {edu.graduated}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}

      {resume.experience && (
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Work Experience</h2>
          <table>
            {resume.experience.map((exp, i) => (
              <tbody key={i}>
                <tr>
                  <td>
                    <p className={styles.title}>{exp.title}</p>
                  </td>
                  <td className={styles.rightAlign}>
                    <p>{exp.location}</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>{exp.company}</p>
                  </td>
                  <td className={styles.rightAlign}>
                    <p>{exp.date}</p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <ul>
                      {exp.description.map((desc, j) => (
                        <li key={j}>{desc}</li>
                      ))}
                    </ul>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </section>
      )}

      {resume.honorsAndAwards && (
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Honors and Awards</h2>
          <table>
            <tbody>
              {resume.honorsAndAwards.map((item, i) => (
                <tr key={i}>
                  <td>
                    <strong>{item.name}</strong>, {item.issuer}
                  </td>
                  <td className={styles.rightAlign}>{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}

      {resume.certifications && (
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Certifications</h2>
          <table>
            <tbody>
              {resume.certifications.map((cert, i) => (
                <tr key={i}>
                  <td>
                    <p>
                      <strong>{cert.name}</strong>, {cert.issuer}
                    </p>
                  </td>
                  <td className={styles.rightAlign}>
                    <p>{cert.date}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}

      {resume.skills && (
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Skills</h2>
          {Object.entries(resume.skills).map(([key, items]) => (
            <p key={key}>
              <strong>
                {key
                  .replace(/([A-Z])/g, " $1")
                  .replace(/^./, (s) => s.toUpperCase())}
                :{" "}
              </strong>
              {items.join(", ")}
            </p>
          ))}
        </section>
      )}
      {/* 
      {resume.activities && (
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Activities</h2>
          <table>
            {resume.activities.map((act, i) => (
              <tbody key={i}>
                <tr>
                  <td>
                    <p><strong>{act.role}</strong>, {act.group}</p>
                  </td>
                  <td className={styles.rightAlign}>
                    {act.date}
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <ul>
                      {act.description.map((desc, j) => (
                        <li key={j}>{desc}</li>
                      ))}
                    </ul>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </section>
      )} */}
    </div>
  );
}

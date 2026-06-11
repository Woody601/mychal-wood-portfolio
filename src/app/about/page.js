import styles from "./page.module.scss";
import Image from "next/image";
export const metadata = {
  title: "About",
};
export default function About() {
  return (
    <>
      <section>
        <h1 className="hero">About</h1>
        <p>
          I'm Mychal Wood, a Full Stack Web Developer located in the Greater
          Indianapolis area.
        </p>

        <Image
          src="/Mychal_Wood.jpg"
          className={styles.portrait}
          alt="Picture of me!"
          width={300}
          height={300}
        />
      </section>
      <section>
        <h1>Front End Development</h1>
        <p>
          I am well versed in a variety of tools and software, when it comes to
          designing for the front end. Some of said tools and software are:
        </p>
        <ul>
          <li>
            <p>NextJS</p>
          </li>
          <li>
            <p>React</p>
          </li>
          <li>
            <p>Git</p>
          </li>
          <li>
            <p>Visual Studio</p>
          </li>
          <li>
            <p>Sass</p>
          </li>
        </ul>
      </section>
    </>
  );
}

import ContactForm from "../components/ContactForm/page";
import styles from "./page.module.css";

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <div className={styles.contact}>
      <h1 className="hero">Contact</h1>
      <p>
        Please send me an email with any questions or inquiries, at{" "}
        <a href="mailto:mychalwood@gmail.com">mychalwood@gmail.com</a>
      </p>
      {/* <p>
        Please enter the details of your request, and I will get back with you
        as soon as possible.
      </p>
      <ContactForm /> */}
    </div>
  );
}

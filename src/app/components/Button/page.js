import Link from "next/link";
import styles from "./page.module.scss";

export default function Button({ href, children, onClick, target }) {
  if (href && onClick == null) {
    return (
      <Link href={href} className={styles.button} target={target}>
        {children}
      </Link>
    );
  } else {
    return (
      <button onClick={onClick} className={styles.button}>
        {children}
      </button>
    );
  }
}

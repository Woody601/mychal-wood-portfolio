import Link from "next/link";
import "@/app/css/button.module.css";

export function Button({ href, children, onClick, target }) {
  if (href && onClick == null) {
    return (
      <Link href={href} className="button" target={target}>
        {children}
      </Link>
    );
  } else {
    return (
      <button onClick={onClick} className="button">
        {children}
      </button>
    );
  }
}

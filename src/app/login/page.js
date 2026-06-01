import LoginForm from "../components/LoginForm/page";
import styles from "./page.module.css";
export const metadata = {
  title: "Login",
};

export default function LoginPage() {
  return (
    <div className={styles.login}>
      <LoginForm />
    </div>
  );
}

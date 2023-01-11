import logo from "@/assets/logo.svg";
import styles from "./styles.module.scss";

export default function Loading() {
  return (
    <div className={styles.container}>
      <img className={styles.logo} src={logo} />
    </div>
  );
}

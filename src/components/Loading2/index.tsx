import logo from "@/assets/logo2.png";
import styles from "./styles.module.scss";

export default function Loading2() {
  return (
    <div className={styles.container}>
      <img className={styles.logo} src={logo} />
    </div>
  );
}

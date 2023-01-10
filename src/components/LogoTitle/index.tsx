import styles from "./styles.module.scss";
import logo from "@/assets/logo.svg";

export default function LogoTitle() {
  return (
    <>
      <div className={`flex flex-row ${styles.container}`}>
        <img className={`${styles.logo}`} src={logo} />
        <div
          className={`flex flex-col justify-contents ${styles.textContainer}`}
        >
          <h1 className={`${styles.name}`}>Poison</h1>
          <p className={`${styles.subname}`}>독초 판별 사이트</p>
        </div>
      </div>
    </>
  );
}

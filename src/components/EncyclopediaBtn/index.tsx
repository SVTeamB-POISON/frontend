import styles from "./styles.module.scss";
import logo from "@/assets/logo.svg";

export default function EncyBtn() {
  return (
    <>
      <div>
        <button className={`drop-shadow-xl ${styles.encybtn}`}>도감</button>
      </div>
    </>
  );
}
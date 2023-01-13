import styles from "./styles.module.scss";
import crown from "@/assets/crown.svg";
import outerCrown from "@/assets/outerCrown.svg";

export default function RankingBtn() {
  return (
    <div className={styles.container}>
      <img className={styles.outerCrown} src={outerCrown} />
      <button className={`${styles.rankBtn}`}>
        <img src={crown} className={styles.btnimage} />
      </button>
    </div>
  );
}
// animation-name: rotate;
//animation-timing-function: ease-in-out;

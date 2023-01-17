import styles from "./styles.module.scss";
import { Rank } from "@/types/rank";
import logo from "@/assets/Logo.svg";

type RankData = {
  result: Rank;
  index: number;
};

export default function RankList({ result, index }: RankData) {
  return (
    <div className={`flex flex-col ${styles.container}`}>
      {result.poison && <img className={styles.poison} src={logo} />}
      <div className={`flex flex-row ${styles.labelContainer}`}>
        <img className={`${styles.image}`} src={result.s3_url} />
        <p className={result.poison ? styles.poisonColor : styles.safeColor}>
          {index + 4}위
        </p>
        <p>{result.name}</p>
        <p>{result.count}회</p>
      </div>
      <hr className={styles.line} />
    </div>
  );
}

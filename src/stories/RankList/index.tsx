import styles from "./styles.module.scss";
import logo from "../assets/logo.svg";
import { Rank } from "@/types/rank";

export type RankData = {
  result: Rank;
  index: number;
  clicked: boolean;
};

export default function RankList({ result, index, clicked }: RankData) {
  return (
    <div className={`flex flex-col ${styles.container}`}>
      {result.poison && <img className={styles.poison} src={logo} />}
      <div className={`flex flex-row ${styles.labelContainer}`}>
        <img className={`${styles.image}`} src={result.s3_url} />
        <div className={result.poison ? styles.poisonColor : styles.safeColor}>
          {index + 4}위
        </div>
        <div>{result.name}</div>
        <div>{clicked ? result?.total_count : result?.count}회</div>
      </div>
      <hr className={styles.line} />
    </div>
  );
}

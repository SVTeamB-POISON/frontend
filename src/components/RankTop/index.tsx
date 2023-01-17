import styles from "./styles.module.scss";
import { Rank } from "@/types/rank";
import logo from "@/assets/logo.svg";

type RankData = {
  result: Rank;
  index: number;
};

export default function RankTop({ result, index }: RankData) {
  return (
    <div className={`flex flex-col ${styles.container}`}>
      {result.poison && <img className={styles.poison} src={logo} />}
      <h1 className={styles.rank}>
        {index === 0 ? index + 2 : index === 1 ? index : index + 1}위
      </h1>
      <img className={`${styles.image}`} src={result.s3_url} />
      <hr className={styles.line} />
      <div className={`flex flex-row ${styles.labelContainer}`}>
        <p>{result.name}</p>
        <p>{result.count}회</p>
      </div>
    </div>
  );
}

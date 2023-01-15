import styles from "./styles.module.scss";
import image1 from "@/assets/image1.svg";
import firstPlace from "@/assets/firstPlace.svg";
import { Rank } from "@/types/rank";

type RankData = {
  result: Rank;
  index: number;
};

export default function RankTop({ result, index }: RankData) {
  return (
    <>
      <div className={`flex flex-col ${styles.container}`}>
        <h1 className={styles.rank}>{index + 1}위</h1>
        <img className={`${styles.image}`} src={result.s3_url} />
        <hr className={styles.line} />
        <div className={`flex flex-row ${styles.labelContainer}`}>
          <p>{result.name}</p>
          <p>{result.count}회</p>
        </div>
      </div>
    </>
  );
}

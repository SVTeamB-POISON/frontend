import styles from "./styles.module.scss";
import image1 from "@/assets/image1.svg";
import firstPlace from "@/assets/firstPlace.svg";
import { Rank } from "@/types/rank";
import { useState } from "react";

type RankData = {
  result: Rank;
  index: number;
};

export default function RankList({ result, index }: RankData) {
  return (
    <div className={`flex flex-col ${styles.container}`}>
      <div className={`flex flex-row ${styles.labelContainer}`}>
        <img className={`${styles.image}`} src={result.s3_url} />
        <p>{index + 4}위</p>
        <p>{result.name}</p>
        <p>{result.count}회</p>
      </div>
      <hr className={styles.line} />
    </div>
  );
}

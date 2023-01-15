import styles from "./styles.module.scss";
import crown from "@/assets/crown.svg";
import outerCrown from "@/assets/outerCrown.svg";
import { QueryKeys, restFetcher } from "@/queryClient";
import { Rank } from "@/types/rank";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function RankingBtn() {
  //랭킹모달 수정
  const [isfocus, setisFocus] = useState(false);
  const onFocus = () => {
    setisFocus(true);
  };
  return (
    <div className={styles.container}>
      <img className={styles.outerCrown} src={outerCrown} />
      <button className={`${styles.rankBtn}`} onClick={onFocus}>
        <img src={crown} className={styles.btnimage} />
      </button>
    </div>
  );
}
// animation-name: rotate;
//animation-timing-function: ease-in-out;

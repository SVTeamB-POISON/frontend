import styles from "./styles.module.scss";
import firstPlace from "@/assets/firstPlace.svg";
import RankList from "../RankList";
import RankTop from "../RankTop";
import { Rank } from "@/types/rank";
import React, { useState } from "react";
import icon_x from "@/assets/icon_x.png";
import { motion } from "framer-motion";

  setRankOpen: React.Dispatch<React.SetStateAction<boolean>>;

type RankModalProp = {
  rankTotal: Rank[];
  rankHour: Rank[];
  setRankOpen: React.Dispatch<React.SetStateAction<boolean>>;
  close: (e: React.SyntheticEvent) => void;
};
export default function RankModal({
  rankTotal,
  rankHour,
  setRankOpen,
  close
}: RankModalProp) {
  const [total, setTotal] = useState(true);
  const totalClick = () => {
    setTotal(true);
  };
  const hourClick = () => {
    setTotal(false);
  };
  const closeClick = () => {
    setRankOpen(false);
  };

  //Ranking-Hour
  const topRank: Rank[] = rankHour.slice(0, 3);
  const lowRank: Rank[] = rankHour.slice(3, 6);
  [topRank[0], topRank[1]] = [topRank[1], topRank[0]];
  //Ranking-Total
  const topTotal: Rank[] = rankTotal.slice(0, 3);
  const lowTotal: Rank[] = rankTotal.slice(3, 6);
  [topTotal[0], topTotal[1]] = [topTotal[1], topTotal[0]];

  return (
    <div className={`drop-shadow-2xl flex flex-col ${styles.container}`}>
      <div className={styles.buttonContainer}>
        <button
          className={styles.RankBTN}
          style={{ color: total ? "var(--purple-color)" : "white" }}
          onClick={totalClick}
        >
          종합
        </button>
        <button
          className={styles.RankBTN}
          style={{ color: total ? "white" : "var(--purple-color)" }}
          onClick={hourClick}
        >
          실시간
        </button>
      </div>
      <h1>판별 결과 랭킹</h1>
      <img className={styles.crown} src={firstPlace} />
      <button className={styles.closeBTN} onClick={closeClick}>
        <img
          src={icon_x}
          className={styles.Xicon}
          id="closeImg"
          alt="closebutton"
        />
      </button>
      <div className={`flex flex-row ${styles.subContainer1}`}>
        {total
          ? topTotal?.map((result, idx) => (
              <RankTop key={idx} result={result!} index={idx} clicked={total} />
            ))
          : topRank?.map((result, idx) => (
              <RankTop key={idx} result={result!} index={idx} clicked={total} />
            ))}
      </div>
      <div className={`flex flex-col ${styles.subContainer2}`}>
        {total
          ? lowTotal?.map((result, idx) => (
              <RankList key={idx} result={result} index={idx} clicked={total} /> // <RankList key={idx} result={result} />
            ))
          : lowRank?.map((result, idx) => (
              <RankList key={idx} result={result} index={idx} clicked={total} /> // <RankList key={idx} result={result} />
            ))}
      </div>
      <motion.div
        className={styles.closeButton}
        id="close"
        onClick={close}
        style={{ backgroundColor: "#f99ee6" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <img src={icon_x} id="closeImg" alt="closebutton" />
      </motion.div>
    </div>
  );
}

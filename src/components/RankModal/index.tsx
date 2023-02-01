import styles from "./styles.module.scss";
import firstPlace from "@/assets/firstPlace.svg";
import RankList from "../RankList";
import RankTop from "../RankTop";
import { Rank } from "@/types/rank";
import React, { useState } from "react";
import icon_x from "@/assets/icon_x.png";
import { motion } from "framer-motion";
import BarChart from "@/components/BarChart";
import PieChart from "@/components/PieChart";
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
  close,
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

  let hourchartName: string[] = [];
  for (let n in rankHour) {
    hourchartName.push(rankHour[n].name);
  }

  let hourchartData: number[] = [];
  for (let n in rankHour) {
    hourchartData.push(rankHour[n]?.count as number);
  }

  //Ranking-Total
  const topTotal: Rank[] = rankTotal.slice(0, 3);
  const lowTotal: Rank[] = rankTotal.slice(3, 6);
  [topTotal[0], topTotal[1]] = [topTotal[1], topTotal[0]];
  let totalchartName: string[] = [];
  for (let n in rankTotal) {
    totalchartName.push(rankTotal[n].name);
  }

  let totalchartData: number[] = [];
  for (let n in rankTotal) {
    totalchartData.push(rankTotal[n]?.total_count as number);
  }

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
      {/* <img className={styles.crown} src={firstPlace} /> */}

      <button className={styles.closeBTN} id="close" onClick={closeClick}>
        <img
          src={icon_x}
          className={styles.Xicon}
          id="closeImg"
          alt="closebutton"
        />
      </button>

      <div className={` ${styles.subContainer}`}>
        <div className={styles.ranksideContainer}>
          <div className={`flex flex-row ${styles.rankContainer1}`}>
            {total
              ? topTotal?.map((result, idx) => (
                  <RankTop
                    key={idx}
                    result={result!}
                    index={idx}
                    clicked={total}
                  />
                ))
              : topRank?.map((result, idx) => (
                  <RankTop
                    key={idx}
                    result={result!}
                    index={idx}
                    clicked={total}
                  />
                ))}
          </div>
          <div className={`flex flex-col ${styles.rankContainer2}`}>
            {total
              ? lowTotal?.map((result, idx) => (
                  <RankList
                    key={idx}
                    result={result}
                    index={idx}
                    clicked={total}
                  />
                ))
              : lowRank?.map((result, idx) => (
                  <RankList
                    key={idx}
                    result={result}
                    index={idx}
                    clicked={total}
                  /> // <RankList key={idx} result={result} />
                ))}
          </div>
        </div>

        <div className={`flex flex-col ${styles.graphContainer}`}>
          <div className={styles.barChart}>
            <BarChart
              ranklabel={total ? totalchartName : hourchartName}
              rankdata={total ? totalchartData : hourchartData}
              chartnumber={1}
            />
          </div>
          <div className={styles.pieChart}>
            <PieChart
              ranklabel={total ? totalchartName : hourchartName}
              rankdata={total ? totalchartData : hourchartData}
              chartnumber={2}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

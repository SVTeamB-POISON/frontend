import styles from "./styles.module.scss";
import firstPlace from "@/assets/firstPlace.svg";
import RankList from "../RankList";
import { Rank } from "@/types/rank";
import RankTop from "../RankTop";

type RankData = {
  rankData: Rank[];
};
export default function RankModal({ rankData }: RankData) {
  const topRank: Rank[] = rankData.slice(0, 3);
  const lowRank: Rank[] = rankData.slice(3, 6);
  [topRank[0], topRank[1]] = [topRank[1], topRank[0]];
  return (
    <div className={`drop-shadow-2xl flex flex-col ${styles.container}`}>
      <img className={styles.crown} src={firstPlace} />
      <div className={`flex flex-row ${styles.subContainer1}`}>
        {topRank?.map((result, idx) => (
          <RankTop key={idx} result={result} index={idx} />
        ))}
      </div>
      <div className={`flex flex-col ${styles.subContainer2}`}>
        {lowRank?.map((result, idx) => (
          <RankList key={idx} result={result} index={idx} /> // <RankList key={idx} result={result} />
        ))}
      </div>
    </div>
  );
}

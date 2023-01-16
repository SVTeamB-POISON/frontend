import styles from "./styles.module.scss";
import firstPlace from "@/assets/firstPlace.svg";
import RankList from "../RankList";
import { Rank } from "@/types/rank";
import RankTop from "../RankTop";

type RankData = {
  rankData: Rank[];
  underRank: Rank[];
};
//rank를 변수 선언 나누어준다.
//

export default function RankModal({ rankData, underRank }: RankData) {
  return (
    <div className={`drop-shadow-2xl flex flex-col ${styles.container}`}>
      <img className={styles.crown} src={firstPlace} />
      <div className={`flex flex-row ${styles.subContainer1}`}>
        {rankData?.map((result, idx) => (
          <RankTop key={idx} result={result} index={idx} />
        ))}
      </div>
      <div className={`flex flex-col ${styles.subContainer2}`}>
        {underRank?.map((result, idx) => (
          <RankList key={idx} result={result} index={idx} /> // <RankList key={idx} result={result} />
        ))}
      </div>
    </div>
  );
}

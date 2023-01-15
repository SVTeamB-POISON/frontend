import styles from "./styles.module.scss";
import image1 from "@/assets/image1.svg";
import firstPlace from "@/assets/firstPlace.svg";
import RankList from "../RankList";
import { Rank } from "@/types/rank";
import RankTop from "../RankTop";

type RankData = {
  rankData: Rank[];
};

export default function RankModal({ rankData }: RankData) {
  return (
    <div className={`drop-shadow-2xl flex flex-col ${styles.container}`}>
      <img className={styles.crown} src={firstPlace} />
      <div className={`flex flex-row ${styles.subContainer1}`}>
        {rankData?.map((result, idx) =>
          idx <= 2 ? <RankTop key={idx} result={result} index={idx} /> : null,
        )}
      </div>
      <div className={`flex flex-col ${styles.subContainer2}`}>
        {rankData?.map((result, idx) =>
          idx > 2 ? (
            <RankList key={idx} result={result} index={idx} /> // <RankList key={idx} result={result} />
          ) : null,
        )}
      </div>
    </div>
  );
}

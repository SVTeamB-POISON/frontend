import styles from "./styles.module.scss";
import firstPlace from "@/assets/firstPlace.svg";
import RankList from "../RankList";
import { Rank } from "@/types/rank";
import RankTop from "../RankTop";
import { motion } from "framer-motion";
import icon_x from "@/assets/icon_x.png";

type RankData = {
  rankData: Rank[];
  close: (e: React.SyntheticEvent) => void;
};

export default function RankModal({ rankData, close }: RankData) {
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

import RankingBtn from "@/components/RankingBtn";
import styles from "./styles.module.scss";
import RankModal from "@/components/RankModal";

//  <RankingBtn />
export default function Test() {
  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <RankModal />
      </div>
    </div>
  );
}

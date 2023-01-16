import styles from "./styles.module.scss";
import crown from "@/assets/crown.svg";
import outerCrown from "@/assets/outercrown.svg";

type RankBtnProps = {
  onClick: () => void;
};

export default function RankingBtn({ onClick }: RankBtnProps) {
  //랭킹모달 수정
  return (
    <div className={styles.container}>
      <img className={styles.outerCrown} src={outerCrown} />
      <button className={`${styles.rankBtn}`} onClick={onClick}>
        <img src={crown} className={styles.btnimage} />
      </button>
    </div>
  );
}
// animation-name: rotate;
//animation-timing-function: ease-in-out;

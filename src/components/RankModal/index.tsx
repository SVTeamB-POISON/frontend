import styles from "./styles.module.scss";
import image1 from "@/assets/image1.svg";
export default function RankModal() {
  return (
    <div className={styles.container}>
      <div className={`flex flex-col ${styles.subContainer1}`}>
        <div className={`flex flex-col${styles.first}`}>
          <div></div>
        </div>
        <div>2nd,3rd</div>
      </div>
      <div className={styles.subContainer2}>
        <ul>
          <div className={`flex flex-col ${styles.listRank}`}>
            <div className={`flex flex-row ${styles.item}`}>
              <a className={`flex flex-row ${styles.anchor}`} href="/Detail">
                <img className={`${styles.image}`} src={image1} />
                <p>순위</p>
                <p>이름</p>
                <p>2000회</p>
              </a>
            </div>
          </div>
          <div className={`flex flex-col ${styles.listRank}`}>
            <div className={`flex flex-row ${styles.item}`}>
              <a className={`flex flex-row ${styles.anchor}`} href="/Detail">
                <img className={`${styles.image}`} src={image1} />
                <p>순위</p>
                <p>이름</p>
                <p>2000회</p>
              </a>
            </div>
          </div>
          <div className={`flex flex-col ${styles.listRank}`}>
            <div className={`flex flex-row ${styles.item}`}>
              <a className={`flex flex-row ${styles.anchor}`} href="/Detail">
                <img className={`${styles.image}`} src={image1} />
                <p>순위</p>
                <p>이름</p>
                <p>2000회</p>
              </a>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
}

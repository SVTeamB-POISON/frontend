import styles from "./styles.module.scss";
import image1 from "@/assets/image1.svg";
import firstPlace from "@/assets/firstPlace.svg";
export default function RankModal() {
  return (
    <div className={`drop-shadow-2xl ${styles.container}`}>
      <div className={`flex flex-row ${styles.subContainer1}`}>
        <div className={`flex flex-col ${styles.third}`}>
          <img className={`${styles.image}`} src={image1} />
          <hr className={styles.line} />
          <div className={`flex flex-row ${styles.labelContainer}`}>
            <p>꽃이름</p>
            <p>1200회</p>
          </div>
        </div>
        <div className={`flex flex-col ${styles.first}`}>
          <img src={firstPlace} className={styles.firstCrown} />
          <img className={`${styles.image}`} src={image1} />
          <hr className={styles.line} />
          <div className={`flex flex-row ${styles.labelContainer}`}>
            <p>꽃이름</p>
            <p>1200회</p>
          </div>
        </div>
        <div className={`flex flex-col ${styles.second}`}>
          <img className={`${styles.image}`} src={image1} />
          <hr className={styles.line} />
          <div className={`flex flex-row ${styles.labelContainer}`}>
            <p>꽃이름</p>
            <p>1200회</p>
          </div>
        </div>
      </div>
      <div className={styles.subContainer2}>
        <div className={`flex flex-col ${styles.listRank}`}>
          <div className={`flex flex-col ${styles.item}`}>
            <a className={`flex flex-row ${styles.anchor}`} href="/Detail">
              <img className={`${styles.image}`} src={image1} />
              <p>순위</p>
              <p>이름</p>
              <p>2000회</p>
            </a>
            <hr className={styles.line2} />
          </div>
          <div className={`flex flex-col ${styles.item}`}>
            <a className={`flex flex-row ${styles.anchor}`} href="/Detail">
              <img className={`${styles.image}`} src={image1} />
              <p>순위</p>
              <p>이름</p>
              <p>2000회</p>
            </a>
            <hr className={styles.line2} />
          </div>
          <div className={`flex flex-col ${styles.item}`}>
            <a className={`flex flex-row ${styles.anchor}`} href="/Detail">
              <img className={`${styles.image}`} src={image1} />
              <p>순위</p>
              <p>이름</p>
              <p>2000회</p>
            </a>
            <hr className={styles.line2} />
          </div>
        </div>
      </div>
    </div>
  );
}

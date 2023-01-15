import React from "react";
import styles from "./styles.module.scss";
import icon_x from "@/assets/icon_x.png";
import { DetailData } from "@/types/detail";

type DetailModalProps = {
  close: () => void;
  children: React.ReactNode;
  detail: DetailData;
};

function DetailModal(props: DetailModalProps) {
  // const [animate, setAnimate] = useState(false);
  // const [localVisible, setLocalVisible] = useState(visible);

  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { close, detail } = props;

  return (
    // 모달이 열릴 때 openModal 클래스가 생성된다.
    <div
      className={styles.modal}
      style={{ backgroundColor: detail.poison ? "#373261" : "#6C7D6C" }}
    >
      <section>
        <div className={styles.summary}>
          <img
            className={styles.imageSection}
            src={detail.s3_url}
            alt="flowerimage"
          />
          <div className={styles.simpleDesc}>
            <div className={styles.dataHeader}>
              <h1 className={styles.dataName}>{detail.name}</h1>
              <h1 className={styles.dataToxic}>
                독성 여부: {detail.poison ? "독초" : "없음"}
              </h1>
              <div className={styles.dataDesc}>
                {detail.poison && <p>중독 시 증상: {detail.symptom}</p>}
                <p>학명: {detail.scientific_name}</p>
                <p>꽃말: {detail.flower_language}</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className={styles.closeButton}
          onClick={close}
          style={{ backgroundColor: detail.poison ? "#f99ee6" : "#8DC36C" }}
        >
          <img src={icon_x} alt="closebutton" />
        </div>
        <div className={styles.detailDesc}>
          <p>{detail.detail}</p>
        </div>
      </section>
    </div>
  );
}

export default DetailModal;

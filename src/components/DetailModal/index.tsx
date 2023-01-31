import React from "react";
import styles from "./styles.module.scss";
import icon_x from "@/assets/icon_x.png";
import { DetailData } from "@/types/detail";
import { motion } from "framer-motion";

type DetailModalProps = {
  close: (e: React.SyntheticEvent) => void;
  children: React.ReactNode;
  detail: DetailData;
};

function DetailModal(props: DetailModalProps) {
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
              <h1>{detail.name}</h1>
              <h2>독성 여부: {detail.poison ? "독초" : "없음"}</h2>
              <div className={styles.dataDesc}>
                {detail.poison && <p>중독 시 증상: {detail.symptom}</p>}
                <p>학명: {detail.scientific_name}</p>
                <p>꽃말: {detail.flower_language}</p>
              </div>
            </div>
          </div>
        </div>
        <motion.div
          id="closeButton"
          className={styles.closeButton}
          onClick={close}
          style={{ backgroundColor: detail.poison ? "#f99ee6" : "#8DC36C" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <img src={icon_x} id="closeImg" alt="closebutton" />
        </motion.div>
        <div className={styles.detailDesc}>
          <p>{detail.detail}</p>
        </div>
      </section>
    </div>
  );
}

export default DetailModal;

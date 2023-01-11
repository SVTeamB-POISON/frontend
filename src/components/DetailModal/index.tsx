import React from "react";
import styles from "./styles.module.scss";
import icon_x from "@/assets/icon_x.png";
import sampleImg from "@/assets/image1.svg";
import { DetailData } from "@/types/detail";
import { QueryKeys, restFetcher } from "@/queryClient";
import { useQuery } from "@tanstack/react-query";

type DetailModalProps = {
  detail: DetailData;
};

export default function DetailModal({ detail }: DetailModalProps) {
  return (
    <div className={styles.container} style={{ backgroundColor: "#373261" }}>
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
      <div className={styles.closeButton}>
        <img src={icon_x} alt="closebutton" />
      </div>
      <div className={styles.detailDesc}>
        <p>{detail.detail}</p>
      </div>
    </div>
  );
}

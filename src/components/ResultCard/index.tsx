import React from "react";
import styles from "./styles.module.scss";
import sampleImg from "@/assets/image1.svg";
import logo from "@/assets/logo.svg";
import DonutChart from "../DonutChart";

export default function ResultCard() {
  return (
    <div className={styles.container}>
      <div
        className={styles.imageSection}
        style={{ backgroundImage: `url(${sampleImg})` }}
      >
        <img className={styles.logo} src={logo} alt="logo" />
        <p>할미꽃</p>
      </div>
      <div className={styles.dataSection}>
        <div className={styles.dataHeader}>
          <h1 className={styles.dataToxic}>독성 여부: 독초</h1>
          <div className={styles.dataChart}>
            <DonutChart percent={0.65} />
          </div>
        </div>
        <p className={styles.dataDesc}>
          {`
          중독 시 증상: 물집, 질식, 호흡곤란 등 
          학명: Pulsatilla koreana
          꽃말: 공경, 충성, 사랑의 배신, 슬픈 추억`}
        </p>
      </div>
    </div>
  );
}

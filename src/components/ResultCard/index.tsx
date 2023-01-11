import React from "react";
import styles from "./styles.module.scss";
import sampleImg from "@/assets/image1.svg";
import logo from "@/assets/logo.svg";
import DonutChart from "../DonutChart";
import { ResultData } from "@/types/result";
import NavigationBar from "../NavigationBar";

type ResultCardProps = {
  result: ResultData;
};

export default function ResultCard({ result }: ResultCardProps) {
  return (
    <li className={styles.container}>
      <div
        className={styles.imageSection}
        style={{ backgroundImage: `url(${result.s3_url})` }}
      >
        {result.poison ? (
          <img className={styles.logo} src={logo} alt="logo" />
        ) : null}
        <p>{result.name}</p>
      </div>
      <div
        className={styles.dataSection}
        style={{ backgroundColor: result.poison ? "#373261" : "#5d7151" }}
      >
        <div className={styles.dataHeader}>
          <h1 className={styles.dataToxic}>
            독성 여부: {result.poison ? "독초" : "없음"}
          </h1>
          <div className={styles.dataChart}>
            <DonutChart percent={result.acc * 0.01} poision={result.poison} />
          </div>
        </div>
        <div className={styles.dataDesc}>
          {result.poison ? <p>중독 시 증상: {result.symptom}</p> : null}
          <p>학명: {result.scientific_name}</p>
          <p>꽃말: {result.flower_language}</p>
        </div>
      </div>
    </li>
  );
}

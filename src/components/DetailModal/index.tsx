import React from "react";
import styles from "./styles.module.scss";
import sampleImg from "@/assets/image1.svg";
import logo from "@/assets/logo.svg";
import { ResultData } from "@/types/result";

// 목데이터 하기 전에 하드코딩 상태로 Sass
// display: flex
// 닫기 버튼은 position: absolute
// margin보다는 top이랑 right 주는 식으로
// { backgroundColor: result.poison ? "#373261" : "#5d7151" }

export default function DetailModal() {
  return (
    <div className={styles.container} style={{ backgroundColor: "#373261" }}>
      <div className={styles.closeButton}></div>
      <div className={styles.summary}>
        <img
          className={styles.imageSection}
          src={
            "http://svteam-b-bucket.s3.ap-northeast-1.amazonaws.com/static/4adff758-1c40-4ca0-ba4c-868c0c29f84a"
          }
          alt="logo"
        />

        <div className={styles.simpleDesc}>
          <div className={styles.dataHeader}>
            <h1 className={styles.dataName}>협죽도</h1>
            <h1 className={styles.dataToxic}>독성 여부: 독초</h1>
            <div className={styles.dataDesc}>
              <p>중독 시 증상: 물집, 질식, 호흡곤란 등</p>
              <p>학명: Pulsatlla koreana</p>
              <p>꽃말: 공경, 충성, 사랑의 배신, 슬픈 추억</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.detailDesc}>
        <p>
          할미꽃은 미나리아재비과에 속하는 쌍떡잎 식물로 여러해살이 풀이다.
          제주도를 제외한 한반도 전역 산지에 분포한다.
        </p>
        <p>
          높이는 30~40cm 정도이다. 곧게 들어간 굵은 뿌리 머리에서 잎이 무더기로
          나와서 비스듬히 퍼진다. 잎은 잎자루가 길고 5개의 작은 잎으로 된
          우상복엽이다. 작은 잎은 길이 3-4cm이며 3개로 깊게 갈라지고 꼭대기의
          갈래 조각은 너비 6-8mm로 끝이 둔하다. 전체에 흰 털이 밀생하여 흰빛이
          돌지만 표면은 짙은 녹색이다. 꽃은 4-5월에 피고 꽃줄기 끝에서 밑을
          향하여 달리며 적자색이다.
        </p>
      </div>
    </div>
  );
}

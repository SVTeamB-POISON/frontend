import React from "react";
import styles from "./styles.module.scss";

export type DonutChartProps = {
  percent: number;
  poision: boolean;
};

export default function DonutChart({ percent, poision }: DonutChartProps) {
  const color = poision ? "#ED8090" : "#8DC36C";
  return (
    <div className={styles.chart}>
      <svg className={styles.aniSvg} viewBox="0 0 200 200">
        <circle
          cx="100"
          cy="100"
          r="90"
          fill="none"
          stroke="#ebebeb"
          strokeWidth="20"
        />
        <circle
          className={styles.animatedCircle}
          stroke={color}
          cx="100"
          cy="100"
          r="90"
          fill="none"
          strokeWidth="20"
          strokeDasharray={`${2 * Math.PI * 90 * percent} ${
            2 * Math.PI * 90 * (1 - percent)
          }`}
          strokeDashoffset={2 * Math.PI * 90 * 0.25}
        />
      </svg>
      <span className={styles.percent}>{Math.floor(percent * 1000) / 10}%</span>
    </div>
  );
}

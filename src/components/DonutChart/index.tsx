import React from "react";
import styles from "./styles.module.scss";

type DonutChartProps = {
  percent: number;
};

export default function DonutChart({ percent }: DonutChartProps) {
  const color = "#ED8090";
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
      <span className={styles.percent}>{percent * 100}%</span>
    </div>
  );
}

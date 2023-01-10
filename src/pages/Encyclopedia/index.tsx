import React from "react";
import styles from "./styles.module.scss";
import { QueryKeys, restFetcher } from "@/queryClient";
import { EncyData } from "@/types/ency";
import { useQuery } from "@tanstack/react-query";
import FlowerCard from "@/components/FlowerCard";
import NavigationBar from "@/components/NavigationBar";

export default function EncyclopediaPage() {
  const { data } = useQuery<EncyData[]>([QueryKeys.ENCY], () =>
    restFetcher({ method: "GET", path: "/flowers" }),
  );
  return (
    <div className={`flex flex-col ${styles.container}`}>
      <NavigationBar></NavigationBar>
      <div className={`flex flex-col  ${styles.textContainer}`}>
        <h1>도감</h1>
        <p>식물에 대해 찾아보세요!</p>
      </div>
      <div className={styles.cardListContainer}>
        <ul className={styles.cardList}>
          {data?.map((result, idx) => (
            <FlowerCard key={idx} list={result}></FlowerCard>
          ))}
        </ul>
      </div>
    </div>
  );
}

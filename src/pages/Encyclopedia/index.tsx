import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { QueryKeys, getClient, restFetcher } from "@/queryClient";
import { EncyData, EncyResponse } from "@/types/ency";
import { useQuery } from "@tanstack/react-query";
import FlowerCard from "@/components/FlowerCard";
import NavigationBar from "@/components/NavigationBar";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

type LocationState = {
  name?: string;
};

export default function EncyclopediaPage() {
  const location = useLocation();
  const { data, isLoading } = useQuery<EncyResponse>(["data"], () =>
    restFetcher({ method: "GET", path: "/flowers" }),
  );
  if (isLoading) return <div>Loading...</div>;
  return (
    <div className={`flex flex-col ${styles.container}`}>
      <NavigationBar />
      <motion.div
        className={`flex flex-col  ${styles.textContainer}`}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.8 },
        }}
      >
        <h1>도감</h1>
        <p>식물에 대해 찾아보세요!</p>
      </motion.div>
      <motion.div
        className={styles.cardListContainer}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.3, duration: 0.8 },
        }}
      >
        <ul className={styles.cardList}>
          {data?.data.map((result, idx) => (
            <FlowerCard key={idx} list={result}></FlowerCard>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

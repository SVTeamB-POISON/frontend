import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { QueryKeys, getClient, restFetcher } from "@/queryClient";
import { EncyData } from "@/types/ency";
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
  const searchName = (location.state as LocationState)?.name || "";
  const queryClient = getClient();
  const { data } = useQuery<EncyData[]>([QueryKeys.ENCY], () =>
    restFetcher({
      method: "GET",
      path: "/flowers",
      params: {
        name: searchName,
      },
    }),
  );

  useEffect(() => {
    if (searchName !== null) {
      queryClient.invalidateQueries([QueryKeys.ENCY]);
    }
  }, []);

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
          {data?.map((result, idx) => (
            <FlowerCard key={idx} list={result}></FlowerCard>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

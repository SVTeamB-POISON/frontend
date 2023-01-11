import ResultCard from "@/components/ResultCard";
import { QueryKeys, restFetcher } from "@/queryClient";
import { ResultData } from "@/types/result";
import { useQuery } from "@tanstack/react-query";
import styles from "./styles.module.scss";
import React from "react";
import NavigationBar from "@/components/NavigationBar";

export default function ResultPage() {
  const { data } = useQuery<ResultData[]>([QueryKeys.RESULT], () =>
    restFetcher({ method: "GET", path: "/result" }),
  );
  return (
    <ul className={styles.container}>
      {data?.map((result, idx) => (
        <ResultCard key={idx} result={result} />
      ))}
    </ul>
  );
}

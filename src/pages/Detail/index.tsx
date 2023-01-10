import DetailModal from "@/components/DetailModal";
import { QueryKeys, restFetcher } from "@/queryClient";
import { DetailData } from "@/types/detail";
import styles from "./styles.module.scss";
import React from "react";

// 일단은 주석처리하고 하드코딩하자!
export default function DetailPage() {
  return (
    <ul className={styles.container}>
      <DetailModal />
    </ul>
  );
}

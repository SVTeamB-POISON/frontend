import { useEffect, useState } from "react";
import NavigationBar from "@/components/NavigationBar";
import ResultCard from "@/components/ResultCard";
import DetailModal from "@/components/DetailModal";
import { ResultData } from "@/types/result";
import { DetailData } from "@/types/detail";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import styles from "./styles.module.scss";
import { QueryKeys, restFetcher } from "@/queryClient";
import { useQueries, useQuery } from "@tanstack/react-query";
import Loading from "@/components/Loading";

type RouterState = {
  data: ResultData[];
};

export default function ResultPage() {
  const location = useLocation();
  // ResultCard에 onClick 함수랑 setState 함수 props로 전달해주기
  const resultdata = (location.state as RouterState).data; // 결과창 3개 들어가는거
  const details = useQueries({
    queries: resultdata.map((data) => {
      return {
        queryKey: [data.name],
        queryFn: () =>
          restFetcher({
            method: "GET",
            path: "/flowers/details",
            params: { name: data.name },
          }),
      };
    }),
  });

  // useState를 사용하여 open 상태를 변경한다. (open일 때 true로 만들어 열리는 방식)
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState<DetailData>();

  const onFilterDetail = (name: string) => {
    const filteredData = details.filter((res) => res.data.name === name);
    return filteredData[0].data;
  };

  // onClick 함수로 openModal 선언
  const openModal = (name: string) => {
    setModalOpen(true);
    document.body.style.overflow = "hidden";
    const data = onFilterDetail(name);
    setModalData(data);
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = "unset";
  };

  return (
    <div className={styles.container}>
      <NavigationBar />
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.3 },
        }}
      >
        <div className={`flex flex-col  ${styles.textContainer}`}>
          <h1>위험해요!</h1>
          <p>독초일 수 있어요!</p>
        </div>
        <ul className={styles.resultContainer}>
          {resultdata?.map((result, idx) => (
            <ResultCard
              key={idx}
              result={result}
              onClick={() => openModal(result.name)}
            />
          ))}
        </ul>
      </motion.div>

      {modalOpen && (
        <DetailModal close={closeModal} detail={modalData!}>
          children
        </DetailModal>
      )}
    </div>
  );
}

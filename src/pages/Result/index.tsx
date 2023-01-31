import React, { useEffect, useState } from "react";
import NavigationBar from "@/components/NavigationBar";
import ResultCard from "@/components/ResultCard";
import DetailModal from "@/components/DetailModal";
import { ResultData } from "@/types/result";
import { DetailData } from "@/types/detail";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
import { QueryKeys, restFetcher } from "@/queryClient";
import { useQueries } from "@tanstack/react-query";
import Loading2 from "@/components/Loading2";

type RouterState = {
  data: ResultData[];
} | null;

export default function ResultPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const resultData = (location.state as RouterState)?.data;
  const hasPoison = Boolean(
    resultData?.filter((result) => result.poison).length,
  );

  const details = useQueries(
    resultData
      ? {
          queries: resultData.map((data) => {
            return {
              queryKey: [QueryKeys.DETAIL, data.name],
              queryFn: () =>
                restFetcher({
                  method: "GET",
                  path: "/flowers/details",
                  params: { name: data.name },
                }),
            };
          }),
        }
      : { queries: [] },
  );
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
    const data = onFilterDetail(name);
    setModalData(data);
  };

  const closeModal = (e: React.SyntheticEvent) => {
    if (!(e.target instanceof HTMLElement)) return;
    if (
      e.target.id === "overlay" ||
      e.target.id === "closeButton" ||
      e.target.id === "close" ||
      e.target.id === "closeImg"
    ) {
      setModalOpen(false);
    }
  };
  useEffect(() => {
    if (resultData === undefined) {
      navigate("/");
    }
  }, []);
  if (details.filter((detail) => detail.isFetching).length > 0) {
    return (
      <div className={styles.loadingContainer}>
        <Loading2 />
      </div>
    );
  }
  return (
    <div
      className={styles.container}
      style={{ overflowY: modalOpen ? "hidden" : "auto" }}
    >
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
          {hasPoison ? (
            <>
              <h1>위험해요!</h1>
              <p>독초일 수 있어요!</p>
            </>
          ) : (
            <>
              <h1>안전해요!</h1>
              <p>독성이 없습니다!</p>
            </>
          )}
        </div>
        <ul
          className={`${
            resultData?.length === 3
              ? styles.resultContainer3
              : resultData?.length === 2
              ? styles.resultContainer2
              : styles.resultContainer1
          }`}
        >
          {resultData?.map((result, idx) => (
            <ResultCard
              key={idx}
              result={result}
              onClick={() => openModal(result.name)}
            />
          ))}
        </ul>
      </motion.div>
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className={styles.modalOverlay}
            id="overlay"
            onClick={closeModal}
            exit={{ opacity: 0 }}
          >
            <DetailModal close={closeModal} detail={modalData!}>
              children
            </DetailModal>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

import NavigationBar from "@/components/NavigationBar";
import ResultCard from "@/components/ResultCard";
import { ResultData } from "@/types/result";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";

type RouterState = {
  data: ResultData[];
} | null;

export default function ResultPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const data = (location.state as RouterState)?.data;
  const hasPoison = Boolean(data?.filter((result) => result.poison).length);
  useEffect(() => {
    if (data === undefined) {
      navigate("/");
    }
  }, []);
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
            data?.length === 3
              ? styles.resultContainer3
              : data?.length === 2
              ? styles.resultContainer2
              : styles.resultContainer1
          }`}
        >
          {data?.map((result, idx) => (
            <ResultCard key={idx} result={result} />
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

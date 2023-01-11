import NavigationBar from "@/components/NavigationBar";
import ResultCard from "@/components/ResultCard";
import { ResultData } from "@/types/result";
import { useLocation } from "react-router-dom";
import styles from "./styles.module.scss";

type RouterState = {
  data: ResultData[];
};

export default function ResultPage() {
  const location = useLocation();
  const data = (location.state as RouterState).data;
  return (
    <div className={styles.container}>
      <NavigationBar />
      <ul className={styles.resultContainer}>
        {data?.map((result, idx) => (
          <ResultCard key={idx} result={result} />
        ))}
      </ul>
    </div>
  );
}

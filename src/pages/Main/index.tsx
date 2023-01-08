import styles from "./styles.module.scss";
import ResultCard from "@/components/ResultCard";

export default function MainPage() {
  // React Query 사용 예시
  // const { data: product } = useQuery<Test[]>([QueryKeys.TEST], () =>
  //   restFetcher({ method: "GET", path: "/product" }),
  // );

  return <div className={styles.container}></div>;
}

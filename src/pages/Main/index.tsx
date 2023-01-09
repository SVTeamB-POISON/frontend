import styles from "./styles.module.scss";
import main_background from "@/assets/main_background.png";
import logo from "@/assets/logo.svg";
import LogoTitle from "@/components/LogoTitle";
import NavigationBar from "@/components/NavigationBar";
import EncyBtn from "@/components/EncyclopediaBtn";
import FlowerList from "@/components/FlowerList";
import { EncyData } from "@/types/ency";
import { QueryKeys, restFetcher } from "@/queryClient";
import { useQuery } from "@tanstack/react-query";
export default function MainPage() {
  // React Query 사용 예시
  // const { data: product } = useQuery<Test[]>([QueryKeys.TEST], () =>
  //   restFetcher({ method: "GET", path: "/product" }),
  // );
  const { data } = useQuery<EncyData[]>([QueryKeys.ENCY], () =>
    restFetcher({ method: "GET", path: "/flowers" }),
  );

  return (
    <>
      <ul className={styles.container}>
        {data?.map((result, idx) => (
          <FlowerList key={idx} list={result}></FlowerList>
        ))}
      </ul>
      <img className={styles.backgroundImg} src={main_background} />
    </>
  );
}

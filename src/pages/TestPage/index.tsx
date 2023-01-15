import RankingBtn from "@/components/RankingBtn";
import styles from "./styles.module.scss";
import RankModal from "@/components/RankModal";
import { QueryKeys, restFetcher } from "@/queryClient";
import { useQuery } from "@tanstack/react-query";
import { Rank } from "@/types/rank";
import RankList from "@/components/RankList";

//  <RankingBtn />
export default function Test() {
  const { data } = useQuery<Rank[]>([QueryKeys.RANK], () =>
    restFetcher({
      method: "GET",
      path: "/flowers/hour-ranking",
    }),
  );
  let sortedList = data?.sort((a, b) => b.count - a.count);

  const onClick = () => {};
  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <RankingBtn />
        <RankModal rankData={sortedList as Rank[]} />
      </div>
    </div>
  );
}

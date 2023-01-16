import RankingBtn from "@/components/RankingBtn";
import styles from "./styles.module.scss";
import RankModal from "@/components/RankModal";
import { QueryKeys, restFetcher } from "@/queryClient";
import { useQuery } from "@tanstack/react-query";
import { Rank } from "@/types/rank";
import { useEffect, useState } from "react";

//  <RankingBtn />
export default function Test() {
  const [underRank, setUnderRank] = useState<Rank[]>([]);
  const [rank, setRank] = useState<Rank[]>([]);
  const { data, isLoading } = useQuery<Rank[]>([QueryKeys.RANK], () =>
    restFetcher({
      method: "GET",
      path: "/flowers/hour-ranking",
    }),
  );
  useEffect(() => {
    if (!isLoading && data) {
      setUnderRank(data?.splice(3, 3));
      [data[0], data[1]] = [data[1], data[0]];
    }
  }, [data]);
  //const sortedList = data?.sort((a, b) => b.count - a.count);
  //const underRank = data?.splice(3, 3);
  console.log("top", data);
  console.log("low", underRank);
  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <RankModal rankData={data!} underRank={underRank!} />
      </div>
    </div>
  );
}

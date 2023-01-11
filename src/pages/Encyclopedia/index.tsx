import styles from "./styles.module.scss";
import { QueryKeys, restFetcher } from "@/queryClient";
import { EncyResponse } from "@/types/ency";
import { useInfiniteQuery } from "@tanstack/react-query";
import FlowerCard from "@/components/FlowerCard";
import NavigationBar from "@/components/NavigationBar";
import { motion } from "framer-motion";
import InfiniteScroll from "react-infinite-scroller";
import Loading from "@/components/Loading";

export default function EncyclopediaPage() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isFetching,
    isError,
    error,
  } = useInfiniteQuery<EncyResponse, Error>(
    [QueryKeys.ENCY],
    ({ pageParam = "/flowers" }) =>
      restFetcher({ method: "GET", path: pageParam }),
    {
      getNextPageParam: (lastPage) => lastPage.nextPage || undefined,
    },
  );
  if (isLoading) return <div className="loading">Loading..</div>;
  if (isError) return <div>Error! {error.toString()}</div>;
  return (
    <div className={`flex flex-col ${styles.container}`}>
      <NavigationBar />
      <motion.div
        className={`flex flex-col  ${styles.textContainer}`}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.8 },
        }}
      >
        <h1>도감</h1>
        <p>식물에 대해 찾아보세요!</p>
      </motion.div>
      <motion.div
        className={styles.cardListContainer}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.3, duration: 0.8 },
        }}
      >
        {isFetching && <Loading />}
        <InfiniteScroll loadMore={() => fetchNextPage()} hasMore={hasNextPage}>
          <ul className={styles.cardList}>
            {data.pages.map((pageData) => {
              return pageData.data.map((result, idx) => (
                <FlowerCard key={idx} list={result} />
              ));
            })}
          </ul>
        </InfiniteScroll>
      </motion.div>
    </div>
  );
}

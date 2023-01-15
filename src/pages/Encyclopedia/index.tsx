import styles from "./styles.module.scss";
import { QueryKeys, restFetcher } from "@/queryClient";
import { EncyData, EncyResponse } from "@/types/ency";
import { useInfiniteQuery } from "@tanstack/react-query";
import FlowerCard from "@/components/FlowerCard";
import NavigationBar from "@/components/NavigationBar";
import { motion } from "framer-motion";
import InfiniteScroll from "react-infinite-scroller";
import Loading from "@/components/Loading";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

type LocationState = {
  flowerName: string;
} | null;
// TODO: 검색 결과 즉시 반영
export default function EncyclopediaPage() {
  const location = useLocation();
  const flowerName = (location.state as LocationState)?.flowerName || null;
  const [isSearch, setIsSearch] = useState(false);
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

  const {
    data: searchData,
    fetchNextPage: searchFetchNextPage,
    hasNextPage: searchHasNextPage,
    isLoading: searchIsLoading,
    isFetching: searchIsFetching,
    isError: searchIsError,
  } = useInfiniteQuery<EncyResponse, Error>(
    ["search"],
    ({ pageParam = `/flowers?name=${flowerName}` }) =>
      restFetcher({
        method: "GET",
        path: pageParam,
      }),
    {
      getNextPageParam: (lastPage) => lastPage.nextPage || undefined,
    },
  );
  useEffect(() => {
    if (flowerName) setIsSearch(true);
    if (!flowerName) setIsSearch(false);
  }, [flowerName]);
  if (isLoading || searchIsLoading) return <Loading />;
  if (isError || searchIsError) return <div>Error! {error?.toString()}</div>;
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
        {isSearch ? (
          <InfiniteScroll
            loadMore={() => searchFetchNextPage()}
            hasMore={searchHasNextPage}
          >
            <ul className={styles.cardList}>
              {searchData.pages.map((pageData) => {
                return pageData.data.map((result, idx) => (
                  <FlowerCard key={idx} list={result} />
                ));
              })}
            </ul>
            {(isFetching || searchIsFetching) && <Loading isInfinite={true} />}
          </InfiniteScroll>
        ) : (
          <InfiniteScroll
            loadMore={() => fetchNextPage()}
            hasMore={hasNextPage}
          >
            <ul className={styles.cardList}>
              {data.pages.map((pageData) => {
                return pageData.data.map((result, idx) => (
                  <FlowerCard key={idx} list={result} />
                ));
              })}
            </ul>
            {(isFetching || searchIsFetching) && <Loading isInfinite={true} />}
          </InfiniteScroll>
        )}
      </motion.div>
    </div>
  );
}

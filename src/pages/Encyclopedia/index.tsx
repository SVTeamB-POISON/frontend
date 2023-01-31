import styles from "./styles.module.scss";
import { QueryKeys, restFetcher } from "@/queryClient";
import { EncyResponse } from "@/types/ency";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import FlowerCard from "@/components/FlowerCard";
import NavigationBar from "@/components/NavigationBar";
import { AnimatePresence, motion } from "framer-motion";
import InfiniteScroll from "react-infinite-scroller";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { DetailData } from "@/types/detail";
import DetailModal from "@/components/DetailModal";
import Loading2 from "@/components/Loading2";

type LocationState = {
  flowerName: string;
} | null;

export default function EncyclopediaPage() {
  const location = useLocation();
  const flowerName = (location.state as LocationState)?.flowerName || null;
  const [detailName, setDetailName] = useState<string | null>();
  const [isSearch, setIsSearch] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

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
    refetch: searchRefetch,
  } = useInfiniteQuery<EncyResponse, Error>(
    [QueryKeys.SEARCH],
    ({ pageParam = `/flowers?name=${flowerName}` }) =>
      restFetcher({
        method: "GET",
        path: pageParam,
      }),
    {
      getNextPageParam: (lastPage) => lastPage.nextPage || undefined,
      staleTime: 0,
      cacheTime: 0,
    },
  );

  const {
    data: detail,
    refetch,
    isFetching: isDetailFetching,
  } = useQuery<DetailData>(
    [QueryKeys.DETAIL, detailName],
    () =>
      restFetcher({
        method: "GET",
        path: "/flowers/details",
        params: { name: detailName },
      }),
    {
      enabled: !!detailName,
    },
  );
  const onCardClick = (name: string) => {
    setDetailName(name);
    setModalOpen(true);
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
    if (detailName) refetch();
  }, [detailName]);
  useEffect(() => {
    if (flowerName) {
      setIsSearch(true);
      searchRefetch();
    }
    if (!flowerName) setIsSearch(false);
  }, [flowerName]);
  if (isLoading || searchIsLoading)
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Loading2 />
      </div>
    );
  if (isError || searchIsError) return <div>Error! {error?.toString()}</div>;
  return (
    <div
      className={`flex flex-col ${styles.container}`}
      style={{ overflowY: modalOpen ? "hidden" : "auto" }}
    >
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
          searchIsFetching ? (
            <Loading2 />
          ) : (
            <InfiniteScroll
              loadMore={() => searchFetchNextPage()}
              hasMore={searchHasNextPage}
            >
              <ul className={styles.cardList}>
                {searchData.pages.map((pageData) => {
                  return pageData.data.map((result, idx) => (
                    <FlowerCard
                      onCardClick={onCardClick}
                      key={idx}
                      list={result}
                    />
                  ));
                })}
              </ul>
              {searchIsFetching && <Loading2 />}
            </InfiniteScroll>
          )
        ) : (
          <InfiniteScroll
            loadMore={() => fetchNextPage()}
            hasMore={hasNextPage}
          >
            <ul className={styles.cardList}>
              {data.pages.map((pageData) => {
                return pageData.data.map((result, idx) => (
                  <FlowerCard
                    onCardClick={onCardClick}
                    key={idx}
                    list={result}
                  />
                ));
              })}
            </ul>
            {isFetching && <Loading2 />}
          </InfiniteScroll>
        )}
      </motion.div>
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className={styles.modalOverlay}
            id="overlay"
            onClick={closeModal}
            exit={{ opacity: 0 }}
          >
            {isDetailFetching ? (
              <Loading2 />
            ) : (
              <DetailModal close={closeModal} detail={detail!}>
                children
              </DetailModal>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

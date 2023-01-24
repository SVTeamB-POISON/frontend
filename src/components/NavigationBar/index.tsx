import styles from "./styles.module.scss";
import logo from "@/assets/logo.svg";
import search from "@/assets/search.svg";
import { useNavigate } from "react-router-dom";
import useSearchFlower from "@/hooks/useSearchFlower";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Rank } from "@/types/rank";
import { useQuery } from "@tanstack/react-query";
import { QueryKeys, restFetcher } from "@/queryClient";
import RankModal from "../RankModal";
export default function NavigationBar() {
  const [flowerName, handleFlowerName, goToEncy, onKeyDown] =
    useSearchFlower("");
  const navigate = useNavigate();
  const goToHome = () => navigate("/");

  //랭킹 확인 필요
  const [rankOpen, setrankOpen] = useState(false);
  const { data: rankHour } = useQuery<Rank[]>([QueryKeys.RANKHOUR], () =>
    restFetcher({
      method: "GET",
      path: "/flowers/hour-ranking",
    }),
  );
  const { data: rankTotal } = useQuery<Rank[]>([QueryKeys.RANKTOTAL], () =>
    restFetcher({
      method: "GET",
      path: "/flowers/total-ranking",
    }),
  );

  const openRank = () => {
    setrankOpen(true);
  };

  const closeRank = (e: React.SyntheticEvent) => {
    if (!(e.target instanceof HTMLElement)) return;
    if (e.target.id === "rankOverLay") setrankOpen(false);
  };

  return (
    <>
      <div className={`flex flex-row ${styles.container}`}>
        <div className={`flex flex-row ${styles.subcontainer}`}>
          <motion.div
            className={`flex flex-row ${styles.title}`}
            onClick={goToHome}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img className={`${styles.logoImg}`} src={logo}></img>
            <div className={`flex flex-col mt-2`}>
              <p className={`${styles.logoName}`}>POISON</p>
              <p className={`${styles.logosubName}`}>독초 판별 사이트</p>
            </div>
          </motion.div>
          <button className={styles.encyBTN} onClick={goToEncy}>
            도감
          </button>
          <button className={styles.rankBTN} onClick={openRank}>
            랭킹
          </button>
        </div>
        <div className={`flex flex-row  ${styles.searchContainer}`}>
          <input
            className={`flex ${styles.searchInput}`}
            placeholder="Type in the Flower Name"
            onChange={handleFlowerName}
            onKeyDown={onKeyDown}
            value={flowerName}
          />
          <motion.div whileTap={{ scale: 0.9 }}>
            <button
              type="submit"
              className={`flex ${styles.searchbtn}`}
              onClick={goToEncy}
            >
              <img src={search} className={styles.searchIcon} />
            </button>
          </motion.div>
        </div>
      </div>
      <AnimatePresence>
        {rankOpen && (
          <motion.div
            id="rankOverLay"
            className={styles.rankOverlay}
            onClick={closeRank}
            exit={{ opacity: 0 }}
          >
            <RankModal
              rankHour={rankHour!}
              rankTotal={rankTotal!}
              setRankOpen={setrankOpen}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

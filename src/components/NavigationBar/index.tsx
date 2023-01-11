import styles from "./styles.module.scss";
import logo from "@/assets/logo.svg";
import search from "@/assets/search.svg";
import { QueryKeys, getClient } from "@/queryClient";
import React, {
  ChangeEventHandler,
  InputHTMLAttributes,
  MouseEventHandler,
  useState,
} from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function NavigationBar() {
  const [flowerName, setflowerName] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setflowerName(value);
  };
  const goEncy = () => {
    if (location.pathname === "/encyclopedia") {
      window.location.reload();
    }
    navigate("/encyclopedia", {
      state: {
        name: flowerName,
      },
    });
  };
  const navigate = useNavigate();
  const goToHome = () => navigate("/");
  return (
    <div className={`flex flex-col ${styles.container}`}>
      <div className={`flex flex-row justify-between ${styles.searchSection}`}>
        <div className={`flex flex-row ${styles.title}`} onClick={goToHome}>
          <img className={`${styles.logoImg}`} src={logo}></img>
          <h1 className={`${styles.logoName}`}>POISON</h1>
        </div>
        <div className={`flex flex-row  ${styles.searchContainer}`}>
          <input
            className={`flex ${styles.searchInput}`}
            placeholder="Type in the Flower Name"
            onChange={onChange}
            value={flowerName}
          />
          <button
            type="submit"
            className={`flex ${styles.searchbtn}`}
            onClick={goEncy}
          >
            <img src={search} className={styles.searchIcon} />
          </button>
        </div>
      </div>
      <div className={`${styles.navline}`}></div>
    </div>
  );
}

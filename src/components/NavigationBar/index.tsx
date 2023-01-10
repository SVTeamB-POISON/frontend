import styles from "./styles.module.scss";
import logo from "@/assets/logo.svg";
import search from "@/assets/search.svg";
import {
  ChangeEventHandler,
  InputHTMLAttributes,
  MouseEventHandler,
  useState,
} from "react";

export default function NavigationBar() {
  return (
    <>
      <div className={`flex flex-col ${styles.container}`}>
        <div
          className={`flex flex-row justify-between ${styles.searchSection}`}
        >
          <div className={`flex flex-row ${styles.title}`}>
            <img className={`${styles.logoImg}`} src={logo}></img>
            <h1 className={`${styles.logoName}`}>POISON</h1>
          </div>
          <div className={`flex flex-row  ${styles.searchContainer}`}>
            <input
              className={`flex ${styles.searchInput}`}
              placeholder="Type in the Flower Name"
            />
            <button className={`flex ${styles.searchbtn}`}>
              <img src={search} className={styles.searchIcon} />
            </button>
          </div>
        </div>
        <div className={`${styles.navline}`}></div>
      </div>
    </>
  );
}

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
  const [flower, setFlower] = useState("");

  function onClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    return console.log("clicked");
  }

  function onChange(event: React.FormEvent<HTMLInputElement>) {
    setFlower(event.currentTarget.value);
  }
  return (
    <>
      <div className={`flex flex-col ${styles.container}`}>
        <div
          className={`flex flex-row justify-between ${styles.searchSection}`}
        >
          <div className={`flex flex-row ${styles.title}`}>
            <img className={`${styles.logoImg}`} src={logo}></img>
            <h1 className={`${styles.logoName}`}>Poison</h1>
          </div>
          <div className={`flex flex-row  ${styles.searchContainer}`}>
            <input
              className={`flex ${styles.searchInput}`}
              placeholder="Type in the Flower Name"
              onChange={onChange}
            />
            <button className={`${styles.searchbtn}`} onClick={onClick}>
              <img src={search} />
            </button>
          </div>
        </div>
        <div className={`bg-blue-600 ${styles.navline}`}></div>
      </div>
    </>
  );
}

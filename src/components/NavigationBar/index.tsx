import styles from "./styles.module.scss";
import logo from "@/assets/logo.svg";

export default function NavigationBar() {
  return (
    <>
      <div className={`flex flex-col ${styles.navContainer}`}>
        <div className={`flex flex-row ${styles.searchbar}`}>
          <img className={`${styles.logoImg}`} src={logo}></img>
          <h1 className={`${styles.logoName}`}>Poison</h1>
          <div className={`flex bg-white ${styles.searchContainer}`}>
            <input
              className={`flex  ${styles.searchInput}`}
              placeholder="Type in the Flower Name"
            />
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}

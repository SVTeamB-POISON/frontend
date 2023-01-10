import styles from "./styles.module.scss";
import logo from "@/assets/logo.svg";
import search from "@/assets/search.svg";

export default function NavigationBar() {
  // function onClick(){
  // }

  return (
    <>
      <div className={`flex flex-col ${styles.navContainer}`}>
        <div className={`flex flex-row ${styles.searchbar}`}>
          <img className={`${styles.logoImg}`} src={logo}></img>
          <h1 className={`${styles.logoName}`}>Poison</h1>
          <div className={`flex flex-row bg-white ${styles.searchContainer}`}>
            <input
              className={`flex border-blue-600  ${styles.searchInput}`}
              placeholder="Type in the Flower Name"
            />
            <button className={`${styles.searchbtn}`}></button>
          </div>
        </div>
        <div className={`bg-blue-600 ${styles.navline}`}></div>
      </div>
    </>
  );
}

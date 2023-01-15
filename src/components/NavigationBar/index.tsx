import styles from "./styles.module.scss";
import logo from "@/assets/logo.svg";
import search from "@/assets/search.svg";
import { useNavigate } from "react-router-dom";
import useSearchFlower from "@/hooks/useSearchFlower";

export default function NavigationBar() {
  const [flowerName, handleFlowerName, goToEncy, onKeyDown] =
    useSearchFlower("");
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
            onChange={handleFlowerName}
            onKeyDown={onKeyDown}
            value={flowerName}
          />
          <button
            type="submit"
            className={`flex ${styles.searchbtn}`}
            onClick={goToEncy}
          >
            <img src={search} className={styles.searchIcon} />
          </button>
        </div>
      </div>
      <div className={`${styles.navline}`}></div>
    </div>
  );
}

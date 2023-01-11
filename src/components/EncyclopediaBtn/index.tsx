import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";

export default function EncyBtn() {
  const navigate = useNavigate();
  const goToEncy = () => navigate("/encyclopedia");
  return (
    <div className={styles.container} onClick={goToEncy}>
      <button className={`drop-shadow-xl ${styles.encybtn}`}>도감</button>
    </div>
  );
}

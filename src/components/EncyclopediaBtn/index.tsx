import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";

export default function EncyBtn() {
  const navigate = useNavigate();
  const goToEncy = () => navigate("/encyclopedia");
  return (
    <motion.div
      className={styles.container}
      onClick={goToEncy}
      whileTap={{ scale: 0.9 }}
    >
      <button className={`drop-shadow-xl ${styles.encybtn}`}>도감</button>
    </motion.div>
  );
}

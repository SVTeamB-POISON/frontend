import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";

export interface EncyBtnProps {
  children?: React.ReactElement | string;
}

export default function EncyBtn({ children }: EncyBtnProps) {
  // const navigate = useNavigate();
  // const goToEncy = () => navigate("/encyclopedia");
  const goToEncy = () => console.log("도감 이동");
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

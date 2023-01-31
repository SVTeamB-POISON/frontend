import styles from "./styles.module.scss";
import logo from "../assets/logo.svg";
import { motion } from "framer-motion";

export interface LogoTitleProps {
  children?: React.ReactElement | string;
}

function LogoTitle({ children }: LogoTitleProps) {
  return (
    <motion.div
      className={`flex flex-row ${styles.container}`}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.8 },
      }}
    >
      <img className={`${styles.logo}`} src={logo} />
      <div className={`flex flex-col justify-contents ${styles.textContainer}`}>
        <h1 className={`${styles.name}`}>POISON</h1>
        <p className={`${styles.subname}`}>독초 판별 사이트</p>
      </div>
    </motion.div>
  );
}

export default LogoTitle;

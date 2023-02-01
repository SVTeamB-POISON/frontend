import logo from "../assets/logo2.png";
import styles from "./styles.module.scss";

export interface Loading2Props {
  children?: React.ReactElement | string;
}

export default function Loading2({ children }: Loading2Props) {
  return (
    <div className={styles.container}>
      <img className={styles.logo} src={logo} />
    </div>
  );
}

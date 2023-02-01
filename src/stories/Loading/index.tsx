import logo from "../assets/logo.svg";
import styles from "./styles.module.scss";

export interface LoadingProps {
  children?: React.ReactElement | string;
}

export default function Loading({ children }: LoadingProps) {
  return (
    <div className={styles.container}>
      <img className={styles.logo} src={logo} />
    </div>
  );
}

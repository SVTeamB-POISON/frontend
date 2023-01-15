import logo from "@/assets/logo.svg";
import styles from "./styles.module.scss";

type LoadingProps = {
  isInfinite?: boolean;
};

export default function Loading({ isInfinite }: LoadingProps) {
  return (
    <div
      className={`${isInfinite ? styles.infiniteContainer : styles.container}`}
    >
      <img className={styles.logo} src={logo} />
    </div>
  );
}

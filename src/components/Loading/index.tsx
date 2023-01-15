import logo from "@/assets/logo.svg";
import styles from "./styles.module.scss";

type LoadingProps = {
  isInfinite?: boolean;
  height?: string;
};

export default function Loading({ isInfinite, height }: LoadingProps) {
  return (
    <div
      className={`${isInfinite ? styles.infiniteContainer : styles.container}`}
      style={height ? { height } : {}}
    >
      <img className={styles.logo} src={logo} />
    </div>
  );
}

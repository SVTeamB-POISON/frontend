import styles from "./styles.module.scss";
import main_background from "@/assets/main_background.png";
import logo from "@/assets/logo.svg";

export default function MainPage() {
  // React Query 사용 예시
  // const { data: product } = useQuery<Test[]>([QueryKeys.TEST], () =>
  //   restFetcher({ method: "GET", path: "/product" }),
  // );

  return (
    <div className={styles.container}>
      <p className={styles.button}>main</p>
      <img className={styles.backgroundImg} src={main_background} />
      <img src={logo} />
    </div>
  );
}

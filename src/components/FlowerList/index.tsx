import { EncyData } from "@/types/ency";
import styles from "./styles.module.scss";
import logo from "@/assets/logo.svg";

type FlowerListProps = {
  list: EncyData;
};

export default function FlowerList({ list }: FlowerListProps) {
  return (
    <>
      <div
        className={`m-2 drop-shadow-xl ${styles.imgContainer}`}
        style={{
          backgroundImage: `url(${list.s3_url})`,
        }}
      >
        <img
          className={
            list.poison
              ? ` ${styles.poisonLogo}`
              : `invisible ${styles.poisonLogo}`
          }
          src={logo}
        />

        <div className={`${styles.nameContainer}`}>
          <p className={`text-white`}>{list.name}</p>
        </div>
      </div>
    </>
  );
}

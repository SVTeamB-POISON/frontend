import { EncyData } from "@/types/ency";
import styles from "./styles.module.scss";
import logo from "@/assets/logo.svg";

type FlowerCardProps = {
  list: EncyData;
};

export default function FlowerCard({ list }: FlowerCardProps) {
  return (
    <div
      className={styles.flowerContainer}
      onClick={() => {
        console.log(list.name);
      }}
    >
      <div
        className={`m-2 drop-shadow-xl ${styles.imgContainer}`}
        style={{
          backgroundImage: `url(${list.s3_url})`,
        }}
      >
        {list.poison && <img className={` ${styles.poisonLogo}`} src={logo} />}
        <div className={`${styles.nameContainer}`}>
          <p className={`text-white `}>{list.name}</p>
        </div>
      </div>
    </div>
  );
}

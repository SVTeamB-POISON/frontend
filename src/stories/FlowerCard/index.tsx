import styles from "./styles.module.scss";
import logo from "../assets/logo.svg";

export type EncyData = {
  name: string;
  s3_url: string;
  poison: boolean;
};

export type FlowerCardProps = {
  list: EncyData;
  onCardClick: (name: string) => void;
};

export default function FlowerCard({ list, onCardClick }: FlowerCardProps) {
  return (
    <div
      className={styles.flowerContainer}
      onClick={() => onCardClick!(list.name)}
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

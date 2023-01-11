import DetailModal from "@/components/DetailModal";
import styles from "./styles.module.scss";
import { QueryKeys, restFetcher } from "@/queryClient";
import { useQuery } from "@tanstack/react-query";

export default function DetailPage() {
  const { data, isLoading } = useQuery([QueryKeys.DETAIL], () =>
    restFetcher({
      method: "GET",
      path: "/flowers/details",
      params: { name: "둥굴레" },
    }),
  );
  if (isLoading) return <div>Loading...</div>;
  return (
    <ul className={styles.container}>
      <DetailModal detail={data} />
    </ul>
  );
}
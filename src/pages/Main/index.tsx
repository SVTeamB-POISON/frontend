import styles from "./styles.module.scss";
import main_background from "@/assets/main_background.png";
import logo from "@/assets/logo.svg";
import upload from "@/assets/upload.svg";
import searchIcon from "@/assets/search.svg";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import LogoTitle from "@/components/LogoTitle";
import EncyBtn from "@/components/EncyclopediaBtn";

interface FileType extends File {
  preview: string;
}

export default function MainPage() {
  // React Query 사용 예시
  // const { data: product } = useQuery<Test[]>([QueryKeys.TEST], () =>
  //   restFetcher({ method: "GET", path: "/product" }),
  // );
  const [files, setFiles] = useState<FileType[]>([]);
  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        }),
      ),
    );
  }, []);
  const isFileUploaded = files.length;
  const { getRootProps, getInputProps, isDragActive, isDragAccept, open } =
    useDropzone({
      accept: {
        "image/*": [],
      },
      onDrop,
    });
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <LogoTitle />
        <div className={`flex flex-row ${styles.searchContainer}`}>
          <input
            className={`flex border-blue-600  ${styles.searchInput}`}
            placeholder="Type in the Flower Name"
          />
          <button className={`${styles.searchbtn} bg-white`}>
            <img src={searchIcon} />
          </button>
        </div>
        <div className={styles.dropContainer}>
          <div
            className={`${styles.dropzone} ${isDragAccept && styles.dropping}`}
            {...getRootProps()}
          >
            <input {...getInputProps()} />
            {isFileUploaded ? (
              <img className={styles.preview} src={files[0].preview} />
            ) : (
              <img src={upload} />
            )}
          </div>
          {isFileUploaded ? (
            <button className={styles.uploadbtn}>업로드</button>
          ) : (
            <p>파일 선택 또는 드래그</p>
          )}
        </div>
      </div>
      <EncyBtn />
      <div
        className={styles.backgroundImg}
        style={{ backgroundImage: `url(${main_background})` }}
      />
    </div>
  );
}

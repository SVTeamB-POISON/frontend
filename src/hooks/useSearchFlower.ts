import useInput from "@/hooks/useInput";
import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";

type ReturnTypes = [
  string,
  (e: ChangeEvent<HTMLInputElement>) => void,
  () => Promise<void>,
  (e: React.KeyboardEvent<HTMLInputElement>) => void,
];

const useSearchFlower = (initialData: string): ReturnTypes => {
  const navigate = useNavigate();
  const [flowerName, handleFlowerName, setFlowerName] = useInput(initialData);
  const goToEncy = async () => {
    navigate("/encyclopedia", {
      state: { flowerName },
    });
    setFlowerName("");
  };
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      e.key === "Enter" &&
      !e.shiftKey &&
      e.nativeEvent.isComposing === false
    ) {
      e.preventDefault();
      goToEncy();
    }
  };
  return [flowerName, handleFlowerName, goToEncy, onKeyDown];
};

export default useSearchFlower;

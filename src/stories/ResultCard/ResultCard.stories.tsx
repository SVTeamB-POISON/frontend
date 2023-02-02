import { Meta, Story } from "@storybook/react";
import ResultCard, { ResultCardProps } from "./index";
import React from "react";
import {
  withKnobs,
  text,
  boolean,
  number,
  select,
} from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

export default {
  title: "Components/ResultCard", // 컴포넌트 이름
  component: ResultCard, // 실제로 가져올 컴포넌트
  decorators: [withKnobs],
} as Meta;

export type ResultData = {
  name: string;
  s3_url: string;
  poison: boolean;
  symptom?: string | null;
  scientific_name: string;
  flower_language: string;
  acc: number;
};

const flower: ResultData = {
  name: "데이지",
  s3_url:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Bellis_perennis_white_%28aka%29.jpg/800px-Bellis_perennis_white_%28aka%29.jpg",
  poison: false,
  scientific_name: "학명임",
  flower_language: "flower_language",
  acc: 97.7,
};

const onCardClick = () => {
  console.log("카드를 클릭함");
};

// const Template: Story<ResultCardProps> = (args) => <ResultCard {...args} />;
// export const Basic = Template.bind({});
// Basic.args = { result: flower, onClick: onCardClick };

export const resultcard = () => {
  const name = text("flowername", "데이지");
  const s3_url = text(
    "s3_url",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Bellis_perennis_white_%28aka%29.jpg/800px-Bellis_perennis_white_%28aka%29.jpg",
  );
  const poison = boolean("poison", false);
  const scientific_name = text("학명", "여기에 학명 입력");
  const flower_language = text("꽃말", "여기에 꽃말 입력");
  const symptom = text("중독증상", "여기에 중독 시 증상 입력");
  const acc = number("정확도", 90.5);

  const flower: ResultData = {
    name: name,
    s3_url: s3_url,
    poison: poison,
    symptom: symptom,
    scientific_name: scientific_name,
    flower_language: flower_language,
    acc: acc,
  };

  return <ResultCard result={flower} onClick={onCardClick}></ResultCard>;
};

resultcard.story = {
  name: "Default",
};

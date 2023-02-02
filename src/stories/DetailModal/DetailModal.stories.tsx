import { Meta, Story } from "@storybook/react";
import DetailModal, { DetailModalProps } from "./index";
import React, { Children } from "react";
import {
  withKnobs,
  text,
  boolean,
  number,
  select,
} from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

export default {
  title: "Components/DetailModal", // 컴포넌트 이름
  component: DetailModal, // 실제로 가져올 컴포넌트
  decorators: [withKnobs],
} as Meta;

export type DetailData = {
  id: number;
  name: string;
  s3_url: string;
  poison: boolean;
  symptom?: string | null;
  scientific_name: string;
  flower_language: string;
  detail: string;
};

const flower: DetailData = {
  id: 3,
  name: "데이지",
  s3_url:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Bellis_perennis_white_%28aka%29.jpg/800px-Bellis_perennis_white_%28aka%29.jpg",
  poison: false,
  scientific_name: "학명임",
  flower_language: "flower_language",
  detail: "여기에 상세정보 입력",
};

const onBtnClick = () => {
  console.log("닫기를 클릭함");
};

// const Template: Story<DetailModalProps> = (args) => <DetailModal {...args} />;
// export const Basic = Template.bind({});
// Basic.args = { close: onBtnClick, detail: flower };

export const detailmodal = () => {
  const id = number("id", 3);
  const name = text("flowername", "데이지");
  const s3_url = text(
    "s3_url",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Bellis_perennis_white_%28aka%29.jpg/800px-Bellis_perennis_white_%28aka%29.jpg",
  );
  const poison = boolean("poison", false);
  const scientific_name = text("학명", "여기에 학명 입력");
  const flower_language = text("꽃말", "여기에 꽃말 입력");
  const symptom = text("중독증상", "여기에 중독 시 증상 입력");
  const detail = text("상세설명", "여기에 상세설명 입력");

  const flower: DetailData = {
    id: id,
    name: name,
    s3_url: s3_url,
    poison: poison,
    symptom: symptom,
    scientific_name: scientific_name,
    flower_language: flower_language,
    detail: detail,
  };

  return <DetailModal detail={flower} close={onBtnClick}></DetailModal>;
};

detailmodal.story = {
  name: "Default",
};

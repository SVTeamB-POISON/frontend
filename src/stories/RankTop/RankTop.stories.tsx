import { Meta, Story } from "@storybook/react";
import RankTop, { RankData } from "./index";
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
  title: "Components/RankTop", // 컴포넌트 이름
  component: RankTop, // 실제로 가져올 컴포넌트
  decorators: [withKnobs],
} as Meta;

export type Rank = {
  name: string;
  s3_url: string;
  poison: boolean;
  total_count?: number;
  count?: number;
};

const flower: Rank = {
  name: "데이지",
  s3_url:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Bellis_perennis_white_%28aka%29.jpg/800px-Bellis_perennis_white_%28aka%29.jpg",
  poison: false,
  total_count: 15,
  count: 15,
};

// const Template: Story<RankData> = (args) => <RankTop {...args} />;
// export const Basic = Template.bind({});
// Basic.args = { result: flower, index: 1, clicked: false };

export const ranktop = () => {
  const name = text("flowername", "데이지");
  const s3_url = text(
    "s3_url",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Bellis_perennis_white_%28aka%29.jpg/800px-Bellis_perennis_white_%28aka%29.jpg",
  );
  const poison = boolean("poison", false);
  const total_count = number("total_count", 15);
  const count = number("count", 15);
  const index = number("index", 4);
  const clicked = boolean("clicked", false);

  const flower: Rank = {
    name: name,
    s3_url: s3_url,
    poison: poison,
    total_count: total_count,
    count: count,
  };

  return <RankTop result={flower} index={index} clicked={clicked}></RankTop>;
};

ranktop.story = {
  name: "Default",
};

import { Meta, Story } from "@storybook/react";
import FlowerCard, { FlowerCardProps } from "./index";
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
  title: "Components/FlowerCard", // 컴포넌트 이름
  component: FlowerCard, // 실제로 가져올 컴포넌트
  decorators: [withKnobs],
} as Meta;

// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.

export type EncyData = {
  name: string;
  s3_url: string;
  poison: boolean;
};

const onCardClick = (name: string) => {
  console.log("카드를 클릭함");
};

/*
const flower: EncyData = {
  name: "데이지",
  s3_url:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Bellis_perennis_white_%28aka%29.jpg/800px-Bellis_perennis_white_%28aka%29.jpg",
  poison: false,
};
*/

// const Template: Story<FlowerCardProps> = (args) => <FlowerCard {...args} />;
// export const Basic = Template.bind({});
// Basic.args = { list: flower, onCardClick: onCardClick };

export const floCard = () => {
  const name = text("flowername", "데이지");
  const s3_url = text(
    "s3_url",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Bellis_perennis_white_%28aka%29.jpg/800px-Bellis_perennis_white_%28aka%29.jpg",
  );
  const poison = boolean("poison", false);

  const flower: EncyData = {
    name: name,
    s3_url: s3_url,
    poison: poison,
  };

  return <FlowerCard list={flower} onCardClick={onCardClick}></FlowerCard>;
};

floCard.story = {
  name: "Default",
};

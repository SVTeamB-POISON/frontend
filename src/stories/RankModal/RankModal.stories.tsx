import { Meta, Story } from "@storybook/react";
import RankModal, { RankModalProp } from "./index";
import { Rank } from "@/types/rank";
import React, { useState } from "react";
import {
  withKnobs,
  text,
  boolean,
  number,
  select,
} from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

export default {
  title: "Components/RankModal", // 컴포넌트 이름
  component: RankModal, // 실제로 가져올 컴포넌트
  decorators: [withKnobs],
} as Meta;

const flower: Array<Rank> = [
  {
    name: "데이지",
    s3_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Bellis_perennis_white_%28aka%29.jpg/800px-Bellis_perennis_white_%28aka%29.jpg",
    poison: false,
    total_count: 15,
    count: 15,
  },
];

// const [RankOpen, setRankOpen] = useState<boolean>();
// setRankOpen(false);

const onCardClick = () => {
  console.log("클릭!");
};

const Template: Story<RankModalProp> = (args) => <RankModal {...args} />;
export const Basic = Template.bind({});
Basic.args = {
  rankTotal: flower,
  rankHour: flower,
  close: onCardClick,
};

export const rankmodal = () => {
  const name = text("flowername", "데이지");
  const s3_url = text(
    "s3_url",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Bellis_perennis_white_%28aka%29.jpg/800px-Bellis_perennis_white_%28aka%29.jpg",
  );
  const poison = boolean("poison", false);
  const total_count = number("total_count", 15);
  const count = number("count", 15);

  const flower: Array<Rank> = [
    {
      name: name,
      s3_url: s3_url,
      poison: poison,
      total_count: total_count,
      count: count,
    },
  ];

  return (
    <RankModal
      rankTotal={flower}
      rankHour={flower}
      close={onCardClick}
    ></RankModal>
  );
};

rankmodal.story = {
  name: "Default",
};

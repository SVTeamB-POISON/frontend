import { Meta, Story } from "@storybook/react";
import RankBtn, { RankBtnProps } from "./index";
import React from "react";

export default {
  title: "Components/RankBtn", // 컴포넌트 이름
  component: RankBtn, // 실제로 가져올 컴포넌트
} as Meta;

const Template: Story<RankBtnProps> = (args) => <RankBtn {...args} />;
export const Basic = Template.bind({});

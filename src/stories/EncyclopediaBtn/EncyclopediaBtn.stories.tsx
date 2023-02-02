import { Meta, Story } from "@storybook/react";
import EncyBtn, { EncyBtnProps } from "./index";
import React from "react";

export default {
  title: "Components/EncyBtn", // 컴포넌트 이름
  component: EncyBtn, // 실제로 가져올 컴포넌트
} as Meta;

const Template: Story<EncyBtnProps> = (args) => <EncyBtn {...args} />;
export const Basic = Template.bind({});

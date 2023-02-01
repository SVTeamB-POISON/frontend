import { Meta, Story } from "@storybook/react";
import NavigationBar, { NavigationBarProps } from "./index";
import React from "react";

export default {
  title: "Components/NavigationBar", // 컴포넌트 이름
  component: NavigationBar, // 실제로 가져올 컴포넌트
} as Meta;

const Template: Story<NavigationBarProps> = (args) => (
  <NavigationBar {...args} />
);
export const Basic = Template.bind({});

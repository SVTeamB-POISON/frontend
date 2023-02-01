import { Meta, Story } from "@storybook/react";
import Loading, { LoadingProps } from "./index";
import React from "react";

export default {
  title: "Components/Loading", // 컴포넌트 이름
  component: Loading, // 실제로 가져올 컴포넌트
} as Meta;

const Template: Story<LoadingProps> = (args) => <Loading {...args} />;
export const Basic = Template.bind({});

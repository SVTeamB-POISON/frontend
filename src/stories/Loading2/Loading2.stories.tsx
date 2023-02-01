import { Meta, Story } from "@storybook/react";
import Loading2, { Loading2Props } from "./index";
import React from "react";

export default {
  title: "Components/Loading2", // 컴포넌트 이름
  component: Loading2, // 실제로 가져올 컴포넌트
} as Meta;

const Template: Story<Loading2Props> = (args) => <Loading2 {...args} />;
export const Basic = Template.bind({});

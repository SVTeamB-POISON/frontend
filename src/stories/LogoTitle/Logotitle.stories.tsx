import { Meta, Story } from "@storybook/react";
import LogoTitle, { LogoTitleProps } from "./index";
import React from "react";

export default {
  title: "Components/LogoTitle", // 컴포넌트 이름
  component: LogoTitle, // 실제로 가져올 컴포넌트
} as Meta;

const Template: Story<LogoTitleProps> = (args) => <LogoTitle {...args} />;
export const Basic = Template.bind({});

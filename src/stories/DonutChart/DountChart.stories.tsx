import { Meta, Story } from "@storybook/react";
import DonutChart, { DonutChartProps } from "./index";
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
  title: "Components/DountChart", // 컴포넌트 이름
  component: DonutChart, // 실제로 가져올 컴포넌트
  decorators: [withKnobs],
} as Meta;

/*
const Template: Story<DonutChartProps> = (args) => <DonutChart {...args} />;
export const Basic = Template.bind({});
Basic.args = { percent: 0.87, poision: false };
*/

export const donutchart = () => {
  const percent = number("일치도", 0.87);
  const poison = boolean("독성 여부", false);

  return <DonutChart percent={percent} poision={poison}></DonutChart>;
};

donutchart.story = {
  name: "Default",
};

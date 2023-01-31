import { Meta, Story } from "@storybook/react";
import DetailModal, { DetailModalProps } from "./index";
import React, { useState } from "react";

export default {
  title: "Components/DetailModal", // 컴포넌트 이름
  component: DetailModal, // 실제로 가져올 컴포넌트
} as Meta;

const [modalOpen, setModalOpen] = useState(false);

const closeModal = (e: React.SyntheticEvent) => {
  if (!(e.target instanceof HTMLElement)) return;
  if (
    e.target.id === "overlay" ||
    e.target.id === "close" ||
    e.target.id === "closeImg"
  ) {
    setModalOpen(false);
  }
};

const Template: Story<DetailModalProps> = (args) => <DetailModal {...args} />;
export const Basic = Template.bind({});

Basic.args = { close={closeModal} detail={detail!} };

export interface DetailModalProps {
  close: (e: React.SyntheticEvent) => void;
  children: React.ReactNode;
  detail: DetailData;
}


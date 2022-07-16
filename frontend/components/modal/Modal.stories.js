import React from "react";
import ModalPageComp from "./ModalPage";

export default {
  component: ModalPageComp,
  title: "modal",
};

const Template = (args) => <ModalPageComp {...args} />;

export const ModalPage = Template.bind({});
ModalPage.args = {};

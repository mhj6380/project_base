import React from "react";
import TextFieldComponent from "./TextField";

export default {
  component: TextFieldComponent,
  title: "Form",
};

const Template = (args) => <TextFieldComponent {...args} />;

export const TextField = Template.bind({});

TextField.args = {
  value: {},
  setValue: () => {},
};

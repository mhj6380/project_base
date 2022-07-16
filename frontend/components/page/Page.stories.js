import React from "react";
import ContentPageComponent from "./ContentPage";

export default {
  component: ContentPageComponent,
  title: "Page",
};

const Template = (args) => <ContentPageComponent {...args} />;

export const ContentPage = Template.bind({});

ContentPage.args = {
  title: "페이지 타이틀",
};

import React from "react";
import PageTitleComponent from "./PageTitle";

export default {
  component: PageTitleComponent,
  title: "PageTitle",
};

const Template = (args) => <PageTitleComponent {...args} />;

export const pageTitle = Template.bind({});
export const pageTitleBackgroundImage = Template.bind({});
export const pageTitleWithSearchBar = Template.bind({});
export const pageTitleCenter = Template.bind({});

pageTitle.args = {
  title: "페이지 타이틀",
  subTitle: "서브 페이지 타이틀 내용입니다",
  backgroundColor: "#fff",
  // backgroundImage:"",
  // mobileBackgroundImage:"",
  titleFontSize: 26,
  subTitleFontSize: 15,
  borderColor: "#e5e5e5",
  // textAlign: "center",
  verticalPadding: 35,
  horizontalPadding: 30,
  titleMarginBottom: 20,
  titleColor: "#1a1a1a",
  subTitleColor: "grey",
  borderRadius: 2,
  useShadow: true,
};

pageTitleBackgroundImage.args = {
  title: "페이지 타이틀",
  subTitle: "서브 페이지 타이틀 내용입니다",
  backgroundColor: "#fff",
  backgroundImage:
    "https://cdn.pixabay.com/photo/2020/03/24/20/59/car-4965498_1280.jpg",
  mobileBackgroundImage:
    "https://cdn.pixabay.com/photo/2020/03/24/20/59/car-4965498_1280.jpg",
  titleFontSize: 26,
  subTitleFontSize: 15,
  borderColor: "#e5e5e5",
  // textAlign: "center",
  verticalPadding: 35,
  horizontalPadding: 30,
  titleMarginBottom: 20,
  titleColor: "#fff",
  subTitleColor: "#fff",
  borderRadius: 2,
  useShadow: true,
};

pageTitleWithSearchBar.args = {
  title: "페이지 타이틀",
  subTitle: "서브 페이지 타이틀 내용입니다",
  backgroundColor: "#fff",
  // backgroundImage:"",
  // mobileBackgroundImage:"",
  titleFontSize: 26,
  subTitleFontSize: 15,
  borderColor: "#e5e5e5",
  // textAlign: "center",
  verticalPadding: 35,
  horizontalPadding: 30,
  titleMarginBottom: 20,
  titleColor: "#1a1a1a",
  subTitleColor: "grey",
  borderRadius: 2,
  useShadow: true,
  useSearch: true,
};

pageTitleCenter.args = {
  title: "페이지 타이틀",
  subTitle: "서브 페이지 타이틀 내용입니다",
  backgroundColor: "#fff",
  // backgroundImage:"",
  // mobileBackgroundImage:"",
  titleFontSize: 26,
  subTitleFontSize: 15,
  borderColor: "#e5e5e5",
  textAlign: "center",
  verticalPadding: 35,
  horizontalPadding: 30,
  titleMarginBottom: 20,
  titleColor: "#1a1a1a",
  subTitleColor: "grey",
  borderRadius: 2,
  useShadow: true,
};

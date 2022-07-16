import React from "react";
import AppFooter from "./AppFooter";

// import { ReactComponent as NotiIcon } from "/asset/noti_icon.svg";
// import { ReactComponent as MyPageIcon } from "/asset/my_page_icon.svg";
export default {
  component: AppFooter,
  title: "AppFooter",
};

const metadata = {
  companyName: "큐브린", // 회사명
  companyAddress: "경기도 의정부시 시민로 146번길 30", // 주소
  companyTel: "010-8588-6380", // 고객센터 전화번호
  businessNumber: "229-03-05494", // 사업자번호
  companyOwner: "문학주", // 대표자명
  companyEmail: "cubelean00@gmail.com", // 이메일
  mailOrderBusinessReportNumber: "", // 통신판매업 신고번호
};

const Template = (args) => <AppFooter {...args} />;

export const Theme1 = Template.bind({});
export const Theme2 = Template.bind({});
export const Theme3 = Template.bind({});
export const Theme4 = Template.bind({});

Theme1.args = {
  theme: "theme1",
  backgroundColor: "#fff",
  textColor: "#1a1a1a",
  textMuteColor: "#4a4a4a",
  borderColor: "lightgrey",
  verticalPadding: 40,
  logoURL: "/asset/page_logo_black.png",
  logoSize: 45,
  metadata,
  logoMarginLeft: -10,
  useSitemap: true,
};

Theme2.args = {
  theme: "theme2",
  backgroundColor: "#fff",
  textColor: "#1a1a1a",
  textMuteColor: "#4a4a4a",
  borderColor: "lightgrey",
  verticalPadding: 40,
  logoURL: null,
  logoSize: null,
  metadata,
  logoMarginLeft: -10,
  infoAlign: "center",
  useSitemap: true,
};

Theme3.args = {
  theme: "theme2",
  backgroundColor: "#fff",
  textColor: "#1a1a1a",
  textMuteColor: "#4a4a4a",
  borderColor: "lightgrey",
  verticalPadding: 40,
  logoURL: null,
  logoSize: null,
  metadata,
  logoMarginLeft: -10,
  infoAlign: "center",
  useSitemap: false,
};

Theme4.args = {
  theme: "theme2",
  backgroundColor: "#fff",
  textColor: "#1a1a1a",
  textMuteColor: "#4a4a4a",
  borderColor: "lightgrey",
  verticalPadding: 40,
  logoURL: null,
  logoSize: null,
  metadata,
  logoMarginLeft: -10,
  infoAlign: "center",
  useSitemap: false,
};

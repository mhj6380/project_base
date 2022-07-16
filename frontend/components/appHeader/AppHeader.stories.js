import React from "react";
import AppHeader from "./AppHeader";
import { RiNotification2Line } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";

// import { ReactComponent as NotiIcon } from "/asset/noti_icon.svg";
// import { ReactComponent as MyPageIcon } from "/asset/my_page_icon.svg";
export default {
  component: AppHeader,
  title: "AppHeader",
};

const Template = (args) => <AppHeader {...args} />;

const mainNavDummy = [
  {
    id: 1,
    href: "/",
    title: "메뉴1",
  },
  {
    id: 2,
    href: "/",
    title: "메뉴2",
  },
  {
    id: 3,
    href: "/",
    title: "메뉴3",
    useBlank: true,
  },
  {
    id: 4,
    title: "메뉴4",
    useCallback: true,
    callback: () => {
      return alert("callback");
    },
  },
];

const subNavDummy = [
  { id: 1, href: "/", title: "서브메뉴1" },
  { id: 2, href: "/", title: "서브메뉴2" },
  { id: 3, href: "/", title: "서브메뉴3" },
  { id: 4, href: "/", title: "서브메뉴4" },
  { id: 5, href: "/", title: "서브메뉴5" },
];

const iconNavDummy = [
  {
    id: 1,
    href: "/",
    isIconMode: true,
    icon: <RiNotification2Line color="#1a1a1a" size={30} />,
  },
  {
    id: 2,
    href: "/",
    isIconMode: true,
    icon: <FaRegUserCircle color="#1a1a1a" size={30} />,
  },
];

export const Theme1 = Template.bind({});
export const Theme2 = Template.bind({});
export const Theme3 = Template.bind({});
export const Theme4 = Template.bind({});
export const Theme5 = Template.bind({});

Theme1.args = {
  theme: "theme1",
  useFixed: true,
  backgroundColor: "#fff",
  subNavBackgroundColor: "#fff",
  useShadow: true,
  logoURL: "/asset/page_logo_black.png",
  logoSize: 55,
  mainNavList: mainNavDummy,
  subNavList: subNavDummy,
  mainNavGap: 1,
  subNavGap: 2,
  mainNavColor: "#1a1a1a",
  subNavColor: "grey",
  subNavDeviderColor: "lightgrey",
  mainNavFontWeight: 700,
  subNavFontWeight: 700,
  headerVerticalPadding: 10,
};

Theme2.args = {
  theme: "theme1",
  useFixed: true,
  backgroundColor: "#1a1a1a",
  subNavBackgroundColor: "#fff",
  useShadow: true,
  logoURL: "/asset/page_logo.png",
  logoSize: 55,
  mainNavList: mainNavDummy,
  subNavList: subNavDummy,
  mainNavGap: 1,
  subNavGap: 2,
  mainNavColor: "#fff",
  subNavColor: "grey",
  subNavDeviderColor: "lightgrey",
  mainNavFontWeight: 700,
  subNavFontWeight: 700,
  headerVerticalPadding: 10,
  searchBarBackgroundColor: "rgba(255,255,255,0.2)",
  searchBarBorderColor: "#fff",
};

Theme3.args = {
  theme: "theme1",
  useFixed: true,
  backgroundColor: "#fff",
  subNavBackgroundColor: "#fff",
  useShadow: true,
  logoURL: "/asset/page_logo_black.png",
  logoSize: 55,
  mainNavList: mainNavDummy,
  subNavList: [],
  iconNavList: iconNavDummy,
  mainNavGap: 1,
  subNavGap: 2,
  mainNavColor: "#1a1a1a",
  subNavColor: "grey",
  subNavDeviderColor: "lightgrey",
  mainNavFontWeight: 700,
  subNavFontWeight: 700,
  headerVerticalPadding: 10,
  iconNavMargin: 20,
};

Theme4.args = {
  theme: "theme1",
  useFixed: true,
  backgroundColor: "#fff",
  subNavBackgroundColor: "#fff",
  useShadow: true,
  logoURL: "/asset/page_logo_black.png",
  logoSize: 55,
  mainNavList: [],
  subNavList: subNavDummy,
  iconNavList: iconNavDummy,
  mainNavGap: 1,
  subNavGap: 2,
  mainNavColor: "#1a1a1a",
  subNavColor: "grey",
  subNavDeviderColor: "lightgrey",
  mainNavFontWeight: 700,
  subNavFontWeight: 700,
  headerVerticalPadding: 10,
  iconNavMargin: 40,
};

Theme5.args = {
  theme: "theme1",
  useFixed: true,
  backgroundColor: "#fff",
  subNavBackgroundColor: "#fff",
  useShadow: true,
  logoURL: "/asset/page_logo_black.png",
  logoSize: 55,
  mainNavList: [],
  subNavList: [],
  iconNavList: iconNavDummy,
  mainNavGap: 1,
  subNavGap: 2,
  mainNavColor: "#1a1a1a",
  subNavColor: "grey",
  subNavDeviderColor: "lightgrey",
  mainNavFontWeight: 700,
  subNavFontWeight: 700,
  headerVerticalPadding: 10,
  iconNavMargin: 40,
};

import React from "react";
import Sidebar from "./Sidebar";

export default {
  component: Sidebar,
  title: "Sidebar",
};

const Template = (args) => <Sidebar {...args} />;

const mainNavDummy = [
  {
    id: 1,
    href: "/",
    title: "Default",
  },
  {
    id: 2,
    href: "/",
    title: "Default2",
  },
  {
    id: 3,
    href: "/",
    title: "Blank",
    useBlank: true,
  },
  {
    id: 4,
    title: "Callback",
    useCallback: true,
    callback: () => {
      return alert("callback");
    },
  },
];

const subNavDummy = [
  { id: 1, href: "/", title: "SubMenu1" },
  { id: 2, href: "/", title: "SubMenu2" },
  { id: 3, href: "/", title: "SubMenu3" },
  { id: 4, href: "/", title: "SubMenu4" },
  { id: 5, href: "/", title: "SubMenu5" },
];

export const Theme1 = Template.bind({});
Theme1.args = {
  backgroundColor: "#fff",
  logoURL: "/asset/page_logo_black.png",
  logoSize: 55,
  mainNavList: mainNavDummy,
  subNavList: subNavDummy,
  isOpen: true,
  width: 320,
  direction: "right",
  useBlack: true,
  setIsOpen: () => {},
};

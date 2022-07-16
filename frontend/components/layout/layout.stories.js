import React from "react";
import AppLayoutComponent from "./AppLayout";
import WideAppLayoutComponent from "./WideAppLayout";
import SidebarLayoutComponent from "./SidebarLayout";
import WideSidebarLayoutComponent from "./WideSidebarLayout";
import styled from "styled-components";
import { Skeleton } from "@mui/material";
export default {
  component: AppLayoutComponent,
  title: "Layout",
};

const DummyChildren = () => {
  return (
    <DummyChildrenWrapper>
      <Skeleton variant="rectangular" width={"100%"} height={"100%"} />
    </DummyChildrenWrapper>
  );
};

const Template = (args) => <AppLayoutComponent {...args} />;
const WideTemplate = (args) => <WideAppLayoutComponent {...args} />;
const SidebarTemplate = (args) => <SidebarLayoutComponent {...args} />;
const WideSidebarTemplate = (args) => <WideSidebarLayoutComponent {...args} />;

export const DefaultLayout = Template.bind({});
export const WideAppLayout = WideTemplate.bind({});
export const SidebarLayout = SidebarTemplate.bind({});
export const WideSidebarLayout = WideSidebarTemplate.bind({});

DefaultLayout.args = {
  title: "페이지 타이틀",
  children: <DummyChildren />,
};

WideAppLayout.args = {
  title: "페이지 타이틀",
  children: <DummyChildren />,
};

SidebarLayout.args = {
  title: "페이지 타이틀",
  children: <DummyChildren />,
  bodyBackgroundColor: "#ededed",
  sidebarBackgroundColor: "#fff",
};
WideSidebarLayout.args = {
  title: "페이지 타이틀",
  children: <DummyChildren />,
  bodyBackgroundColor: "#ededed",
  sidebarBackgroundColor: "#fff",
};

const DummyChildrenWrapper = styled.div`
  width: 100%;
  height: 1000px;
`;

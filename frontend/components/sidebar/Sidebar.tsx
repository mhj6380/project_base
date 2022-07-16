import React from "react";
import styled from "styled-components";
// import { Spin as Hamburger } from "hamburger-react";

interface NavItem {
  id: number;
  title: string;
  href?: string;
  useCallback?: boolean;
  callback?: any;
  useBlank?: boolean;
  mainNavGap?: number;
  subNavGap?: number;
  isIconMode?: boolean;
  icon?: any;
  iconSize?: number;
}

interface Props {
  backgroundColor: string;
  logoSize: number;
  logoURL: string;
  mainNavList?: NavItem[];
  subNavList?: NavItem[];
  isOpen: boolean;
  setIsOpen: any;
  width: number;
  direction: "left" | "right";
  useBlack: boolean;
  navTextColor?: string;
}

const Sidebar: React.FC<Props> = ({
  backgroundColor,
  logoSize,
  logoURL,
  mainNavList,
  subNavList,
  isOpen,
  setIsOpen,
  width,
  direction,
  useBlack,
  navTextColor,
}) => {
  return (
    // <div className={`mobile_nav_area mobile tablet ` + (isOpen && "active")}>
    <>
      {useBlack && isOpen && (
        <BlackWrapper
          onClick={() => {
            setIsOpen(false);
          }}
        ></BlackWrapper>
      )}
      <SidebarWrapper
        isOpen={isOpen}
        backgroundColor={backgroundColor}
        logoSize={logoSize}
        width={width}
        direction={direction}
        navTextColor={navTextColor}
      >
        <div className="mobile_nav_header">
          <img className="page_logo" src={logoURL} alt="page-logo" />
        </div>

        <ul className="mobile_nav_menus">
          {mainNavList?.map((menu) => (
            <li
              className="mobile_nav_menu_item"
              key={"mobile_nav_menu" + menu.id}
            >
              {menu.useCallback ? (
                <a href="#" onClick={menu.callback}>
                  {menu.title}
                </a>
              ) : (
                <a href={menu.href} target={menu.useBlank ? "_blank" : "_self"}>
                  {menu.title}
                </a>
              )}
            </li>
          ))}
          <ul className="mobile_sub_navs">
            {subNavList?.map((menu) => (
              <li
                className="mobile_nav_menu_item"
                key={"mobile_sub_nav" + menu.id}
              >
                {menu.useCallback ? (
                  <a href="#" onClick={menu.callback}>
                    {menu.title}
                  </a>
                ) : (
                  <a
                    href={menu.href}
                    target={menu.useBlank ? "_blank" : "_self"}
                  >
                    {menu.title}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </ul>
      </SidebarWrapper>
    </>
  );
};

const BlackWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  z-index: 20;
`;
const SidebarWrapper = styled.div<{
  isOpen: boolean;
  backgroundColor: string;
  logoSize: number;
  width: number;
  direction: string;
  navTextColor?: string;
}>`
  width: ${(props) => props.width || 320}px;
  background: ${(props) => props.backgroundColor || "#fff"};
  position: fixed;
  top: 0;
  z-index: 30;
  // right: 0;
  transition: all 0.3s;
  ${(props) => props.direction === "left" && "left: -" + props.width + "px;"}
  ${(props) => props.direction === "right" && "right: -" + props.width + "px;"}
  

  ${(props) => props.isOpen && props.direction === "left" && "left: 0;"}  
  ${(props) => props.isOpen && props.direction === "right" && "right: 0;"}   

  height: 100vh;

  .mobile_nav_header {
    width: 100%;
    padding: 20px;
    .page_logo {
      height: 40px;
    }
  }
  .mobile_nav_menus {
    width: 100%;
    overflow-y: scroll;
    .mobile_nav_menu_item {
      width: 100%;
      a {
        display: inline-block;
        width: 100%;
        padding: 20px;

        color: ${(props) => props.navTextColor || "#1a1a1a"};
        font-weight: 500;
      }
    }
  }
  .mobile_sub_navs {
    width: 100%;
    .mobile_nav_menu_item {
      width: 100%;
      a {
        display: inline-block;
        width: 100%;
        padding: 20px;
        color: ${(props) => props.navTextColor || "#1a1a1a"};
        font-weight: 500;
      }
    }
  }
`;
export default Sidebar;

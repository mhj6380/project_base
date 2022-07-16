import React from "react";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import { Spin as Hamburger } from "hamburger-react";
import Sidebar from "../sidebar/Sidebar";
import useMeasure from "react-use-measure";

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
  theme?: "theme1" | "theme2";
  useFixed?: boolean;
  backgroundColor?: string;
  subNavBackgroundColor?: string;
  useShadow: boolean;
  logoURL: string;
  logoSize: number;
  mainNavList?: NavItem[];
  iconNavList?: NavItem[];
  subNavList?: NavItem[];
  mainNavGap?: number;
  subNavGap?: number;
  mainNavColor?: string;
  subNavColor?: string;
  hamburgerColor?: string;
  subNavDeviderColor?: string;
  mainNavFontWeight?: number;
  subNavFontWeight?: number;
  useSearchBar?: boolean;
  headerVerticalPadding?: number;
  searchBarBackgroundColor?: string;
  searchBarBorderColor?: string;
  searchBarPlaceholderColor?: string;
  iconNavMargin?: number;
  isWide?: boolean;
}

const AppHeader: React.FC<Props> = ({
  // theme,
  useFixed,
  backgroundColor,
  subNavBackgroundColor,
  useShadow,
  logoURL,
  logoSize,
  mainNavList,
  subNavList,
  iconNavList,
  mainNavGap,
  subNavGap,
  mainNavColor,
  subNavColor,
  hamburgerColor,
  subNavDeviderColor,
  mainNavFontWeight,
  subNavFontWeight,
  // useSearchBar,
  headerVerticalPadding,
  searchBarBackgroundColor,
  searchBarBorderColor,
  // searchBarPlaceholderColor,
  iconNavMargin,
  isWide,
}) => {
  const [ref, bounds] = useMeasure();
  const [isOpen, setIsOpen] = React.useState(false);
  // const [isActive, setIsActive] = React.useState(false);

  // const headerActive = isActive || scrollY > 50;

  return (
    <>
      <AppHeaderWrapper
        ref={ref}
        backgroundColor={backgroundColor}
        subNavBackgroundColor={subNavBackgroundColor}
        logoSize={logoSize}
        useShadow={useShadow}
        useFixed={useFixed}
        mainNavGap={mainNavGap}
        subNavGap={subNavGap}
        mainNavColor={mainNavColor}
        subNavColor={subNavColor}
        subNavDeviderColor={subNavDeviderColor}
        mainNavFontWeight={mainNavFontWeight}
        subNavFontWeight={subNavFontWeight}
        headerVerticalPadding={headerVerticalPadding}
        searchBarBackgroundColor={searchBarBackgroundColor}
        searchBarBorderColor={searchBarBorderColor}
        iconNavMargin={iconNavMargin}
      >
        <div className={isWide ? "no_inner" : "inner"}>
          <div className="logo_area">
            <img className="page_logo" src={logoURL} alt="page-logo" />
          </div>

          <button
            className="main_toggle mobile tablet"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Hamburger color={hamburgerColor || "#1a1a1a"} />
          </button>

          <Sidebar
            backgroundColor="#fff"
            direction="right"
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            logoSize={55}
            logoURL="/asset/page_logo_black.png"
            mainNavList={mainNavList}
            subNavList={subNavList}
            useBlack
            width={320}
          />

          {/* {mainNavList.length > 0 && ( */}
          <div className="main_nav_area pc">
            <div className="search_bar">
              <input type="text" placeholder="검색어를 입력해 주세요." />
              <FiSearch
                size={20}
                className="search_icon"
                color={searchBarBorderColor || "grey"}
              />
            </div>
            <ul className="nav_menus">
              {mainNavList?.map((menu) => (
                <li key={"nav_menu" + menu.id} className="nav_menu_item">
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

            {iconNavList && (
              <ul className="nav_icons">
                {iconNavList.map((menu) => (
                  <li className="nav_menu_item" key={"nav_icon" + menu.id}>
                    {menu.useCallback ? (
                      <a href="#" onClick={menu.callback}>
                        {menu.icon}
                      </a>
                    ) : (
                      <a
                        href={menu.href}
                        target={menu.useBlank ? "_blank" : "_self"}
                      >
                        {menu.icon}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
          {/* )} */}
        </div>
        {subNavList && subNavList.length > 0 && (
          <nav className="submenu_area pc">
            <div className={isWide ? "no_inner" : "inner"}>
              <ul className="sub_navs">
                {subNavList?.map((menu) => (
                  <li className="nav_menu_item" key={"sub_nav" + menu.id}>
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
            </div>
          </nav>
        )}
      </AppHeaderWrapper>
      {useFixed && (
        <div
          style={{ width: "100%", height: bounds.height, background: "green" }}
        ></div>
      )}
    </>
  );
};

const AppHeaderWrapper = styled.div<{
  backgroundColor?: string;
  logoSize?: number;
  useShadow?: boolean;
  useFixed?: boolean;
  mainNavGap?: number;
  subNavGap?: number;
  mainNavColor?: string;
  subNavColor?: string;
  subNavDeviderColor?: string;
  headerVerticalPadding?: number;
  searchBarBackgroundColor?: string;
  searchBarBorderColor?: string;
  iconNavMargin?: number;
  subNavBackgroundColor?: string;
  mainNavFontWeight?: number;
  subNavFontWeight?: number;
}>`
  width: 100%;
  height: auto;
  background: ${(props) => props.backgroundColor};
  ${(props) =>
    props.useShadow
      ? "box-shadow:0 0 10px rgba(0,0,0,0.2);"
      : "box-shadow:none;"};
  ${(props) => props.useFixed && "position:fixed;top:0;left:0;"}

  z-index: 10;
  .inner {
    padding: ${(props) => props.headerVerticalPadding || 0}px 15px;
    height: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
  }
  .no_inner {
    padding: ${(props) => props.headerVerticalPadding || 0}px 15px;
    height: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
  }

  .logo_area {
    width: 30%;
    .page_logo {
      height: ${(props) => props.logoSize}px;
    }
  }

  .nav_icons {
    display: inline-block;
    height: 100%;
    margin-left: ${(props) => props.iconNavMargin}px;
    li {
      display: inline-block;
      height: 100%;
      a {
        display: inline-block;
        padding: 10px;
      }
    }
  }
  .main_nav_area {
    // width: 50%;
    flex-flow: row wrap;
    align-items: center;
    .search_bar {
      width: 250px;
      position: relative;
      display: inline-block;

      .search_icon {
        position: absolute;
        right: 10px;
        top: 11px;
      }
      input {
        width: 100%;
        padding-left: 15px;

        border-radius: 30px;
        height: 45px;
        background: ${(props) => props.searchBarBackgroundColor || "#fff"};
        border: 1px solid ${(props) => props.searchBarBorderColor || "grey"};
        color: ${(props) => props.searchBarBorderColor || "#1a1a1a"};
      }
      input::placeholder {
        color: ${(props) => props.searchBarBorderColor || "grey"};
      }
    }

    .nav_menus {
      display: inline-block;
      text-align: right;
      li {
        display: inline-block;
        margin: 0 ${(props) => props.mainNavGap || 1 * 5}px;
        a {
          display: inline-block;
          padding: 10px;
          color: ${(props) => props.mainNavColor || "#1a1a1a"};
          font-weight: ${(props) => props.mainNavFontWeight || 500};
        }
      }
      li:last-child {
        margin-right: 0;
      }
    }
  }
  .submenu_area {
    background: ${(props) => props.subNavBackgroundColor || "none"};
    height: auto;
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    border-top: 1px solid ${(props) => props.subNavDeviderColor || "none"};
    border-bottom: 1px solid ${(props) => props.subNavDeviderColor || "none"};
    .sub_navs {
      li {
        display: inline-block;
        margin: 0 ${(props) => props.subNavGap || 1 * 5}px;

        a {
          display: inline-block;
          padding: 8px;
          color: ${(props) => props.subNavColor || "#1a1a1a"};
          font-weight: ${(props) => props.subNavFontWeight || 500};
        }
      }
      li:first-child {
        margin-left: 0;
      }
      li:last-child {
        margin-right: 0;
      }
    }
  }

  @media (min-width: 768px) {
  }
  @media (min-width: 992px) {
    .main_nav_area {
      display: flex !important;
    }
  }
  @media (min-width: 1200px) {
  }
`;

export default AppHeader;

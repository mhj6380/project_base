import styled from "styled-components";
import React from "react";
import { inject, observer } from "mobx-react";
import { AppStore } from "../../mobx/store/AppStore";
import AppFooter from "../appFooter/AppFooter";
import AppHeader from "../appHeader/AppHeader";
import AccordionMenu from "../menu/AccordionMenu";

interface Props {
  children?: any;
  title: string;
  appStore?: AppStore;
  sidebarWidth?: number;
  bodyBackgroundColor?: string;
  sidebarBackgroundColor?: string;
  sidebarTop?: number; // 헤더의 높이값정도 넣어주면 됨
  sidebarPaddingTop?: number;
  disabledHeader?: boolean;
  useFixed?: boolean;
}

const SidebarLayout: React.FC<Props> = observer(
  ({
    children,
    title,
    sidebarPaddingTop,
    sidebarWidth,
    bodyBackgroundColor,
    sidebarBackgroundColor,
    sidebarTop,
    appStore,
    disabledHeader,
    useFixed,
  }) => {
    React.useEffect(() => {}, []);
    return (
      <>
        {!disabledHeader && (
          <AppHeader
            backgroundColor="#fff"
            headerVerticalPadding={10}
            logoSize={55}
            logoURL="/asset/page_logo_black.png"
            mainNavColor="#1a1a1a"
            mainNavFontWeight={700}
            mainNavGap={1}
            mainNavList={[
              {
                href: "/",
                id: 1,
                title: "메뉴1",
              },
              {
                href: "/",
                id: 2,
                title: "메뉴2",
              },
              {
                href: "/",
                id: 3,
                title: "메뉴3",
                useBlank: true,
              },
              {
                callback: () => {},
                id: 4,
                title: "메뉴4",
                useCallback: true,
              },
            ]}
            subNavBackgroundColor="#fff"
            subNavColor="grey"
            subNavDeviderColor="lightgrey"
            subNavFontWeight={700}
            subNavGap={2}
            subNavList={[
              {
                href: "/",
                id: 1,
                title: "서브메뉴1",
              },
              {
                href: "/",
                id: 2,
                title: "서브메뉴2",
              },
              {
                href: "/",
                id: 3,
                title: "서브메뉴3",
              },
              {
                href: "/",
                id: 4,
                title: "서브메뉴4",
              },
              {
                href: "/",
                id: 5,
                title: "서브메뉴5",
              },
            ]}
            theme="theme1"
            useFixed
            useShadow
          />
        )}

        <div className="inner">
          <SidebarLayoutInnerWrapper
            sidebarPaddingTop={sidebarPaddingTop}
            sidebarWidth={sidebarWidth}
            bodyBackgroundColor={bodyBackgroundColor}
            sidebarBackgroundColor={sidebarBackgroundColor}
            sidebarTop={sidebarTop}
            useFixed={useFixed}
          >
            <div className="sidemenu">
              <h3>{title}</h3>
              <AccordionMenu />
            </div>
            <div className="content">{children}</div>
          </SidebarLayoutInnerWrapper>
        </div>
        <AppFooter
          backgroundColor="#fff"
          borderColor="lightgrey"
          logoMarginLeft={-10}
          logoSize={45}
          logoURL="/asset/page_logo_black.png"
          metadata={{
            businessNumber: "229-03-05494",
            companyAddress: "경기도 의정부시 시민로 146번길 30",
            companyEmail: "cubelean00@gmail.com",
            companyName: "큐브린",
            companyOwner: "문학주",
            companyTel: "010-8588-6380",
            mailOrderBusinessReportNumber: "",
          }}
          textColor="#1a1a1a"
          textMuteColor="#4a4a4a"
          theme="theme1"
          useSitemap
          verticalPadding={40}
        />
      </>
    );
  }
);

const SidebarLayoutInnerWrapper = styled.div<{
  sidebarWidth?: number;
  bodyBackgroundColor?: string;
  sidebarBackgroundColor?: string;
  sidebarTop: number;
  sidebarPaddingTop?: number;
  useFixed?: boolean;
}>`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  
  .sidemenu {
    display:none;
    
    width: ${(props) => props.sidebarWidth || 256}px;
    height:${(props) => `calc(100vh - ${props.sidebarTop || 75}px);`}  
    background: ${(props) => props.sidebarBackgroundColor || "#fff"};
    padding: 15px; 
    margin-right: 20px;
    padding-top: ${(props) => props.sidebarPaddingTop || 35}px;
    ${(props) =>
      props.useFixed &&
      `
    position:fixed;`}
  }
  .content {
    width: 100%;  
    transition:all .3s;   
    background: ${(props) => props.bodyBackgroundColor || "#fff"};

  }
  @media (min-width: 992px) {
    .sidemenu{
      display:block;
    }

    .content {
    width: calc(100% - ${(props) => props.sidebarWidth || 256}px - 20px); 
        ${(props) =>
          props.useFixed &&
          `margin-left: calc(${props.sidebarWidth || 256}px + 20px); `}
  }
  }
`;

// export default inject("appStore")(SidebarLayout);
export default SidebarLayout;

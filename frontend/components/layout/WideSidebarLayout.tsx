import styled from "styled-components";
import React from "react";
import { inject, observer } from "mobx-react";
import { AppStore } from "../../mobx/store/AppStore";
import AppFooter from "../appFooter/AppFooter";
import AppHeader from "../appHeader/AppHeader";
import AccordionMenu from "../menu/AccordionMenu";
import { useBackend } from "config";
import Cookies from "js-cookie";
import { useAuthDispatch } from "lib/providers/authProvider";
import { useRouter } from "next/router";
import { initializeAuth } from "functions/auth.function";

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
  requiredLogin?: boolean;
}

const WideSidebarLayout: React.FC<Props> = observer(
  ({
    children,
    title,
    sidebarWidth,
    bodyBackgroundColor,
    sidebarBackgroundColor,
    appStore,
    sidebarTop,
    sidebarPaddingTop,
    disabledHeader,
    requiredLogin,
  }) => {
    const Router = useRouter();
    const accessToken = Cookies.get("accessToken");
    const dispatch = useAuthDispatch();

    React.useEffect(() => {
      if (!useBackend) return;
      if (requiredLogin) {
        if (!accessToken) {
          // 로그인되어있지 않다면 로그인창으로
          Router.push("/auth/login");
        }
      }

      if (accessToken) {
        // 로그인 되어있다면
        initializeAuth(accessToken, dispatch);
        console.log(appStore); // 사용 시 제거
      }
    }, []);
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
            mainNavList={[]}
            subNavBackgroundColor="#fff"
            subNavColor="grey"
            subNavDeviderColor="lightgrey"
            subNavFontWeight={700}
            subNavGap={2}
            subNavList={[]}
            theme="theme1"
            useFixed
            useShadow
            isWide={true}
          />
        )}
        <WideSidebarLayoutInnerWrapper
          sidebarWidth={sidebarWidth}
          bodyBackgroundColor={bodyBackgroundColor}
          sidebarBackgroundColor={sidebarBackgroundColor}
          sidebarTop={sidebarTop}
          sidebarPaddingTop={sidebarPaddingTop}
        >
          <div className="sidemenu">
            <h3>{title}</h3>
            <AccordionMenu
              color={"#1a1a1a"}
              activeColor={"#206c9c"}
              submenuBackgrouncColor={"#ededed"}
            />
          </div>
          <div className="sidebar_fake"></div>
          <div className="content">
            <div className="wide_sidebar_layout_inner">{children}</div>
            <AppFooter
              isWide={true}
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
              horizontalPadding={20}
            />
          </div>
        </WideSidebarLayoutInnerWrapper>
      </>
    );
  }
);

const WideSidebarLayoutInnerWrapper = styled.div<{
  sidebarWidth?: number;
  bodyBackgroundColor?: string;
  sidebarBackgroundColor?: string;
  sidebarTop: number;
  sidebarPaddingTop?: number;
}>`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  .sidebar_fake {
    display:none; 
    width: ${(props) => props.sidebarWidth || 256}px;
    height: 100px;
  }
  .sidemenu {
    
    transition:all .3s; 
    width: ${(props) => props.sidebarWidth || 256}px;
    height:${(props) => `calc(100vh - ${props.sidebarTop || 75}px);`}  
    background: ${(props) => props.sidebarBackgroundColor || "#fff"};
    padding: 15px;
    padding-top: ${(props) => props.sidebarPaddingTop || 35}px; 
    position: fixed;
    // left: 0;
    left: -${(props) => props.sidebarWidth || 256}px; 
    top: ${(props) => props.sidebarTop}px; 
    z-index: 99999;
    box-shadow: 0 0 5px rgba(0,0,0,0.2); 
    ul {
      li {
        width: 100%;
        a {
          display: inline-block;
          width: 100%;
          height: 60px;
          line-height: 60px;
          font-size: 16px;
          color: #1a1a1a;
        }
      }
    }
  }

  .sidemenu.active{
    left:0; 
  }
  .content {
    transition:all .3s;  
    width: 100%; 
    background: ${(props) => props.bodyBackgroundColor || "#fff"};
  }
  .wide_sidebar_layout_inner {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }

  @media (min-width: 992px) {
    .sidebar_fake {
      display:inline-block; 
    }
     .content {
       width: calc(100% - ${(props) => props.sidebarWidth || 256}px);
     }
     .sidemenu {
       left:0; 
     }
  }
`;

// export default inject("appStore")(WideSidebarLayout);
export default inject("appStore")(WideSidebarLayout);

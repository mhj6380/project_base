import styled from "styled-components";
import React from "react";
import { inject, observer } from "mobx-react";
import { AppStore } from "../../mobx/store/AppStore";
import AppFooter from "../appFooter/AppFooter";
import AppHeader from "../appHeader/AppHeader";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { useAuthDispatch } from "lib/providers/authProvider";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { useBackend } from "config";

interface Props {
  children: any;
  title: string;
  appStore?: AppStore;
  requiredLogin?: boolean;
}

const AppLayout: React.FC<Props> = observer(
  ({ children, appStore, requiredLogin }) => {
    const Router = useRouter();
    const accessToken = Cookies.get("accessToken");
    const dispatch = useAuthDispatch();

    React.useEffect(() => {
      if (requiredLogin) {
        if (!accessToken) {
          // 로그인되어있지 않다면 로그인창으로
          Router.push("/auth/login");
        }
      }

      if (accessToken) {
        // 로그인 되어있다면

        axios
          .get(BACKEND_URL + "/auth/" + jwtDecode<any>(accessToken).userId, {
            headers: { Authorization: `Bearer ${accessToken}` },
          })
          .then((res: any) => {
            const userInfo = res.data;
            dispatch({ type: "UPDATE_USER", userInfo });

            if (isUseSocket) {
              authStore.init(userInfo); // mobx
            }
          });
      } else {
        authStore.init();
      }
    }, []);
    return (
      <>
        {/* <div style={{ width: "100%", height: 100 }} ref={ref}> */}{" "}
        {/* </div> */}
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
        <div className="inner">{children}</div>
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

// export default inject("appStore")(AppLayout);
export default AppLayout;

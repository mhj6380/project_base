import React from "react";
import { inject, observer } from "mobx-react";
import { AppStore } from "../../mobx/store/AppStore";
import AppFooter from "../appFooter/AppFooter";
import AppHeader from "../appHeader/AppHeader";
import { useBackend } from "config";

interface Props {
  children: any;
  title: string;
  appStore?: AppStore;
  requiredLogin?: boolean;
}

const WideAppLayout: React.FC<Props> = observer(
  ({ children, appStore, requiredLogin }) => {
    React.useEffect(() => {}, []);
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
        {children}
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

// export default inject("appStore")(WideAppLayout);
export default WideAppLayout;

import React from "react";
import { inject, observer } from "mobx-react";
import { AppStore } from "../../mobx/store/AppStore";
import { useBackend } from "config";
import { initializeAuth } from "functions/auth.function";
import { useRouter } from "next/router";
import { useAuthDispatch } from "lib/providers/authProvider";
import Cookies from "js-cookie";

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
        {/* <div style={{ width: "100%", height: 100 }} ref={ref}> */}{" "}
        {/* </div> */}
        {children}
      </>
    );
  }
);

// export default inject("appStore")(AppLayout);
export default inject("appStore")(AppLayout);

import React from "react";
import { inject, observer } from "mobx-react";
import { AppStore } from "../../mobx/store/AppStore";
import { useBackend } from "config";

interface Props {
  children: any;
  title: string;
  appStore?: AppStore;
  requiredLogin?: boolean;
}

const AppLayout: React.FC<Props> = observer(
  ({ children, appStore, requiredLogin }) => {
    React.useEffect(() => {}, []);
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
export default AppLayout;

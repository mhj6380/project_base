// import "../styles/globals.css";
import "swiper/swiper.scss";
import "../styles/index.css";
import "../styles/globals.css";
import "antd/dist/antd.css";
import type { AppProps } from "next/app";
import { useStores } from "../mobx/store/Context";
import { Provider } from "mobx-react";
import { AuthProvider } from "lib/providers/authProvider";
import { ChatProvider } from "lib/providers/chatProvider";
import React from "react";

const AppProvider = ({ contexts, children }) =>
  contexts.reduce(
    (prev: any, context: any) =>
      React.createElement(context, {
        children: prev,
      }),
    children
  );

function MyApp({ Component, pageProps }: AppProps) {
  const { appStore } = useStores();

  return (
    <AppProvider contexts={[AuthProvider, ChatProvider]}>
      <Provider appStore={appStore}>
        <Component {...pageProps} />
      </Provider>
    </AppProvider>
  );
}

export default MyApp;

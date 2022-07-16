// import "../styles/globals.css";
import "swiper/swiper.scss";
import "../styles/index.css";
import "../styles/globals.css";
import "antd/dist/antd.css";
import type { AppProps } from "next/app";
import { useStores } from "../mobx/store/Context";
import { Provider } from "mobx-react";

function MyApp({ Component, pageProps }: AppProps) {
  const { appStore } = useStores();

  return (
    <Provider appStore={appStore}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;

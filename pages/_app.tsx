import "antd/dist/antd.css";
import { Provider } from "next-auth/client";
import { AppProps } from "next/app";
import * as React from "react";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default App;

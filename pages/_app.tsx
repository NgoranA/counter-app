// import "primereact/resources/themes/lara-dark-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";

import "/node_modules/primeflex/primeflex.css";
import PrimeReact from "primereact/api";

import { Provider, useStore } from "react-redux";
import { store } from "../store/store";

PrimeReact.ripple = true;

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />;
    </Provider>
  );
}

export default MyApp;

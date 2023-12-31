import React from "react";
import ReactDOM from "react-dom";
import "./styles.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./redux/store";
import { IntlProvider } from "react-intl";
import DoiNgonNgu from "./DoiNgonNgu";
import "@formatjs/intl-pluralrules/polyfill";
import "@formatjs/intl-pluralrules/locale-data/en";
import "@formatjs/intl-pluralrules/locale-data/vi";

import "@formatjs/intl-relativetimeformat/polyfill";
import "@formatjs/intl-relativetimeformat/locale-data/en";
import "@formatjs/intl-relativetimeformat/locale-data/vi";
// import vi from './transalate/vi.json'
// import en from './transalate/en.json'
// const locale = vi;
// const messages=vi;
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <DoiNgonNgu>
        <App />
      </DoiNgonNgu>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

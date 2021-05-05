import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { Provider } from "react-redux";
import store from "./store";
import Navigator from "./components/Navigator"
import LyricConfirm from "./components/LyricConfirm"

ReactDOM.render(
  <HashRouter>
    <Navigator/>
    <LyricConfirm/>
  </HashRouter>,
  document.getElementById("root")
);

// <Provider store={store}>
//   <App />
// </Provider>

// If you want your app to work offline and load faster, you can chađinge
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

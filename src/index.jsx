import "core-js/stable";
import "regenerator-runtime/runtime";
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

import "./index.html";
import "./index.scss";
import { Provider } from "react-redux";
import { store } from "./reducers";
// import { mult, sum } from "./modules/calk";
// import plant from "./img/third.jpg";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);

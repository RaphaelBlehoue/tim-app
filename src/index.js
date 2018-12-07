import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "modules/App/rootReducer";
import App from "modules/App/App";
import middleware from "store/configStore";
import "styles/global_assets/mainLayout";
import "styles/assets/main";

const store = createStore(rootReducer, middleware);

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

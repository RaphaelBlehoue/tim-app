import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "Modules/App/rootReducer";
import middleware from "Store/configStore";
import "assets/main";
import "global_assets/mainLayout";
import App from "Modules/App/App";

const store = createStore(rootReducer, middleware);

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

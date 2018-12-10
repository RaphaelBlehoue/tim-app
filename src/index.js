import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "Modules/App/rootReducer";
import App from "Modules/App/App";
import middleware from "Store/configStore";
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

import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

const composeEnhancers = composeWithDevTools({
  shouldHotReload: true
});

export default composeEnhancers(applyMiddleware(logger, thunk));

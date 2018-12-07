import { combineReducers } from "redux";
import authReducer from "modules/Auth/authReducer";
import UIReducer from "modules/UI/UIReducer";

export default combineReducers({
  auth: authReducer,
  UI: UIReducer
});

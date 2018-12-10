import { combineReducers } from "redux";
import authReducer from "Modules/Auth/authReducer";
import UIReducer from "Modules/UI/UIReducer";

export default combineReducers({
  auth: authReducer,
  UI: UIReducer
});

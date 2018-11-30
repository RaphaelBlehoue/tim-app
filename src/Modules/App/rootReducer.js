import { combineReducers } from "redux";
import authReducer from "Modules/Auth/authReducer";

export default combineReducers({
  auth: authReducer
});

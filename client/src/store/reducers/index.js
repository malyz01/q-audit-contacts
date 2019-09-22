import { combineReducers } from "redux";
import auditorReducer from "./auditorReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
  auditor: auditorReducer,
  error: errorReducer
});

import { combineReducers } from "redux";
import auditorReducer from "./auditorReducer";
import modalReducer from "./modalReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
  auditor: auditorReducer,
  modal: modalReducer,
  error: errorReducer
});

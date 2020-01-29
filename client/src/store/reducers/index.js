import { combineReducers } from "redux";
import auditorReducer from "./auditorReducer";
import modalReducer from "./modalReducer";
import errorReducer from "./errorReducer";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  auditor: auditorReducer,
  modal: modalReducer,
  error: errorReducer,
  form: formReducer
});

import { combineReducers } from "redux";
import providerReducer from "./providerReducer";
import auditorReducer from "./auditorReducer";
import modalReducer from "./modalReducer";
import errorReducer from "./errorReducer";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  providers: providerReducer,
  auditors: auditorReducer,
  modals: modalReducer,
  errors: errorReducer,
  form: formReducer
});

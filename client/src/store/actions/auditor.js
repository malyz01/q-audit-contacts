import api from "../../api";
import err from "./error";
import { ADD_AUDITOR, FETCH_AUDITORS } from "../types";

export default {
  fetchAuditor: () => {
    console.log("fetchOne");
  },
  fetchAuditors: () => async dispatch => {
    try {
      const response = await api.get("/auditor");
      dispatch({
        type: FETCH_AUDITORS,
        payload: response.data
      });
    } catch (e) {
      dispatch(err.add(e));
    }
  },
  addAuditor: data => async dispatch => {
    try {
      const response = await api.post("/auditor", data);
      dispatch({
        type: ADD_AUDITOR,
        payload: response.data
      });
      return response.status === 200 && true;
    } catch (e) {
      dispatch(err.add(e));
    }
  }
};

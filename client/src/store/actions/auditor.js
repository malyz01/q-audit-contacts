import api from "../../api";
import err from "./error";
import { ADD_AUDITOR } from "../types";

export default {
  fetchAuditor: () => {
    console.log("fetchOne");
  },
  fetchAuditors: () => {
    console.log("fetchAll");
  },
  addAuditor: data => async dispatch => {
    try {
      const response = await api.post("/auditor", data);
      dispatch({
        type: ADD_AUDITOR,
        payload: response.data
      });
      return response.status;
    } catch (e) {
      console.log(e);
    }
  }
};

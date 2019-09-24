import api from "../../api";
import err from "./error";
import {
  ADD_AUDITOR,
  FETCH_AUDITORS,
  FETCH_AUDITOR,
  SELECT_AUDITOR,
  CLEAR_AUDITOR
} from "../types";

export default {
  fetchAuditor: id => async dispatch => {
    try {
      const response = await api.get(`/auditor/${id}`);
      dispatch({
        type: FETCH_AUDITOR,
        payload: response.data
      });
      return response.status === 200;
    } catch (e) {
      dispatch(err.add(e));
    }
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
  selectAuditor: data => ({
    type: SELECT_AUDITOR,
    payload: data
  }),
  clearAuditor: () => ({
    type: CLEAR_AUDITOR
  }),
  addAuditor: data => async dispatch => {
    try {
      const response = await api.post("/auditor", data);
      dispatch({
        type: ADD_AUDITOR,
        payload: response.data
      });
      return response.status === 200;
    } catch (e) {
      dispatch(err.add(e));
    }
  },
  editAuditor: (id, data) => async dispatch => {
    try {
      const response = await api.patch(`/auditor/${id}`, data);
      dispatch({
        type: FETCH_AUDITOR,
        payload: response.data
      });
      return response.status === 200;
    } catch (e) {
      dispatch(err.add(e));
    }
  },
  deleteAuditor: id => async dispatch => {
    try {
      const response = await api.delete(`/auditor/${id}`);
      return response.status === 200;
    } catch (e) {
      dispatch(err.add(e));
    }
  }
};

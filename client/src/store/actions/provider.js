import api from "../../api";
import err from "./error";
import {
  ADD_PROVIDER,
  FETCH_PROVIDERS,
  FETCH_PROVIDER,
  SELECT_PROVIDER,
  CLEAR_PROVIDER,
  ALLCLEAR_PROVIDER
} from "../types";

export default {
  fetchProvider: id => async dispatch => {
    try {
      const response = await api.get(`/providers/${id}`);
      dispatch({
        type: FETCH_PROVIDER,
        payload: response.data
      });
      return response.status === 200;
    } catch (e) {
      dispatch(err.add(e));
    }
  },
  fetchProviders: () => async dispatch => {
    try {
      const response = await api.get("/providers");
      dispatch({
        type: FETCH_PROVIDERS,
        payload: response.data
      });
    } catch (e) {
      dispatch(err.add(e));
    }
  },
  selectProvider: data => ({
    type: SELECT_PROVIDER,
    payload: data
  }),
  clearProvider: () => ({
    type: CLEAR_PROVIDER
  }),
  allClearProvider: () => ({
    type: ALLCLEAR_PROVIDER
  }),
  addProvider: data => async dispatch => {
    try {
      const response = await api.post("/providers", { data });
      dispatch({
        type: ADD_PROVIDER,
        payload: response.data
      });
      return response.status === 200;
    } catch (e) {
      dispatch(err.add(e));
    }
  },
  editProvider: (id, data) => async dispatch => {
    try {
      const response = await api.patch(`/providers/${id}`, data);
      dispatch({
        type: FETCH_PROVIDER,
        payload: response.data
      });
      return response.status === 200;
    } catch (e) {
      dispatch(err.add(e));
    }
  },
  deleteProvider: id => async dispatch => {
    try {
      const response = await api.delete(`/providers/${id}`);
      return response.status === 200;
    } catch (e) {
      dispatch(err.add(e));
    }
  }
};

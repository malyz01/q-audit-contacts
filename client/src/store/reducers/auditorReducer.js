import {
  FETCH_AUDITORS,
  FETCH_AUDITOR,
  SELECT_AUDITOR,
  CLEAR_AUDITOR,
  ADD_AUDITOR
} from "../types";

const INITIAL_STATE = {
  all: [],
  selected: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_AUDITORS:
      return { ...state, all: action.payload };
    case FETCH_AUDITOR:
    case ADD_AUDITOR:
    case SELECT_AUDITOR:
      return { ...state, selected: { ...action.payload } };
    case CLEAR_AUDITOR:
      return { ...state, selected: {} };
    default:
      return INITIAL_STATE;
  }
};

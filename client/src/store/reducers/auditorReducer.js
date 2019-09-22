import { FETCH_AUDITORS, FETCH_AUDITOR, ADD_AUDITOR } from "../types";

const INITIAL_STATE = {
  all: [],
  selected: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_AUDITORS:
      return { ...state, all: [action.payload] };
    case FETCH_AUDITOR:
    case ADD_AUDITOR:
      return { ...state, selected: { ...action.payload } };
    default:
      return INITIAL_STATE;
  }
};

import {
  ADD_PROVIDER,
  FETCH_PROVIDERS,
  FETCH_PROVIDER,
  SELECT_PROVIDER,
  CLEAR_PROVIDER,
  ALLCLEAR_PROVIDER
} from "../types";

const INITIAL_STATE = {
  all: [],
  selected: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_PROVIDERS:
      return { ...state, all: action.payload };
    case FETCH_PROVIDER:
    case ADD_PROVIDER:
    case SELECT_PROVIDER:
      return { ...state, selected: { ...action.payload } };
    case CLEAR_PROVIDER:
      return { ...state, selected: {} };
    case ALLCLEAR_PROVIDER:
      return INITIAL_STATE;
    default:
      return INITIAL_STATE;
  }
};

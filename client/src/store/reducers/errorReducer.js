import { ADD_ERROR, CLEAR_ERROR } from "../types";

const INITIAL_STATE = {
  status: null,
  message: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ERROR:
      return { ...state, ...action.payload };
    case CLEAR_ERROR:
      return { ...INITIAL_STATE };
    default:
      return state;
  }
};

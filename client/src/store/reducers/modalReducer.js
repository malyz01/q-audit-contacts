import { TOGGLE } from "../types";

const INITIAL_STATE = {
  open: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE:
      return { open: !state.open };
    default:
      return { ...state };
  }
};

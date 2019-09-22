import { ADD_ERROR, CLEAR_ERROR } from "../types";

const errorValidation = message => {
  if (message.includes("username_1 dup key")) {
    message = "Username already taken";
  }
  if (message.includes("email_1 dup key")) {
    message = "Email already taken";
  }
  return message;
};

export default {
  add: err => {
    const {
      status,
      data: {
        error: { message: msg }
      }
    } = err.response;
    const message = errorValidation(msg);
    const error = { status, message };
    return {
      type: ADD_ERROR,
      payload: error
    };
  },
  clear: () => ({
    type: CLEAR_ERROR
  })
};

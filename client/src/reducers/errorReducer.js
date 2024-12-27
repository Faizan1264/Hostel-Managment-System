
import { GET_ERRORS } from "../actions/types";

const initialState = {};

// Named export instead of default export
const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ERRORS:
      return action.payload;
    default:
      return state;
  }
};

export default errorReducer;

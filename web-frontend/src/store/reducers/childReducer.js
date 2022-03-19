import { GET_CHILDREN } from "../types";

const childReducer = (state = [], action) => {
  switch (action.type) {
    case GET_CHILDREN:
      return action.payload;
    default:
      return state;
  }
};

export default childReducer;

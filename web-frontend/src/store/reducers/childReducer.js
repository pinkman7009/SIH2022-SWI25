import { GET_CHILDREN, GET_CHILD } from "../types";

const childReducer = (state = [], action) => {
  switch (action.type) {
    case GET_CHILDREN:
    case GET_CHILD:
      return action.payload;
    default:
      return state;
  }
};

export default childReducer;

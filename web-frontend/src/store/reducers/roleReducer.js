import { SET_ROLE } from "../types";

const roleReducer = (state = null, action) => {
  switch (action.type) {
    case SET_ROLE:
      return action.payload;
    default:
      return state;
  }
};

export default roleReducer;

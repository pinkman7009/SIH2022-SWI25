import { GET_GRIEVANCES } from "../types";

const grievanceReducer = (state = [], action) => {
  switch (action.type) {
    case GET_GRIEVANCES:
      return action.payload;
    default:
      return state;
  }
};

export default grievanceReducer;

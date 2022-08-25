import { GET_GRIEVANCES, GET_GRIEVANCES_BY_ID } from "../types";

const grievanceReducer = (state = null, action) => {
  switch (action.type) {
    case GET_GRIEVANCES:
      return action.payload;
    case GET_GRIEVANCES_BY_ID:
      return action.payload;
    default:
      return state;
  }
};

export default grievanceReducer;

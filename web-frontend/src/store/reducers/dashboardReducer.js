import { GET_STATS } from "../types";

const statsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_STATS:
      return action.payload;
    default:
      return state;
  }
};

export default statsReducer;

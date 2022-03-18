import { LOGIN, LOGOUT } from "../types";

const initialState = {
  token: null,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      localStorage.setItem("token", action.token);
      return {
        ...state,
        token: action.token,
      };
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
      };
    default:
      return state;
  }
};

export default loginReducer;

import { LOGIN, LOGOUT } from "../types";

const initialState = {
  token: null,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
      };
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        user: null,
      };
    default:
      return state;
  }
};

export default loginReducer;

import { SET_ROLE } from "../types";

export const setRole = (role) => async (dispatch) => {
  try {
    dispatch({ type: SET_ROLE, payload: role });
  } catch (err) {
    console.error(err);
  }
};

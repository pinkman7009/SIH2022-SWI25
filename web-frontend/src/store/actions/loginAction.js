import axios from "axios";
import { LOGIN, LOGOUT } from "../types";

export const login = (email, password) => async (dispatch) => {
  try {
    const form = {
      email,
      password,
    };

    const headers = {
      ContentType: "Application/json",
    };

    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/auth/login`,
      form,
      { headers }
    );
    dispatch({ type: LOGIN, payload: res.data });
  } catch (err) {
    console.error(err);
  }
};

export const logout = () => (dispatch) => {
  try {
    dispatch({ type: LOGOUT });
  } catch (err) {
    console.error(err);
  }
};

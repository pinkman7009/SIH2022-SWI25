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
      "https://cltssih.herokuapp.com/api/login",
      form,
      { headers }
    );
    console.log(res.data.token);
    dispatch({ type: LOGIN, token: res.data.token });
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

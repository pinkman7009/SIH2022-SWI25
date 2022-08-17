import axios from "axios";
import { GET_CHILDREN } from "../types";

export const fetchChildren = () => async (dispatch) => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/child`);
    dispatch({ type: GET_CHILDREN, payload: res.data });
  } catch (err) {
    console.error(err);
  }
};

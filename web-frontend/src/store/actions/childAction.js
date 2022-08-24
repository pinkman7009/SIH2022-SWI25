import axios from "axios";
import { GET_CHILDREN, GET_CHILD } from "../types";

export const fetchChildren = () => async (dispatch) => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/child`);
    dispatch({ type: GET_CHILDREN, payload: res.data });
  } catch (err) {
    console.error(err);
  }
};

export const fetchChild = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/child/${id}`);
    // dispatch({ type: GET_CHILD, payload: res.data });
    return res.data;
  } catch (err) {
    console.error(err);
  }
};

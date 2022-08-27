import axios from "axios";
import { GET_STATS } from "../types";

export const fetchStats = () => async (dispatch) => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/statistics`);

    console.log({ data: res.data });
    dispatch({ type: GET_STATS, payload: res.data });
  } catch (err) {
    console.error(err);
  }
};

import axios from "axios";
import { GET_GRIEVANCES } from "../types";

export const fetchGrievances = () => async (dispatch) => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/report`);
    dispatch({ type: GET_GRIEVANCES, payload: res.data });
  } catch (err) {
    console.error(err);
  }
};

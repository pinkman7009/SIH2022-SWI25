import axios from "axios";
import { GET_GRIEVANCES, GET_GRIEVANCES_BY_ID } from "../types";

export const fetchGrievances = () => async (dispatch) => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/report`);
    dispatch({ type: GET_GRIEVANCES, payload: res.data });
  } catch (err) {
    console.error(err);
  }
};

export const fetchGrievanceFromId = (id) => async (dispatch) => {
  try {
    console.log({ id });
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/report/${id}`
    );

    dispatch({ type: GET_GRIEVANCES_BY_ID, payload: res.data });
  } catch (error) {
    console.error(error);
  }
};

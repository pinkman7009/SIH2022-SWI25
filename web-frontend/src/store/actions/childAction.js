import axios from "axios";
import { GET_CHILDREN, GET_CHILD } from "../types";

export const fetchChildren = () => async (dispatch) => {
  try {
    let res = await axios.get(`${process.env.REACT_APP_API_URL}/child`);

    res.data[0].report = {
      date: "2022-08-25T18:56:40.876+05:30",
      status: "Accepted",
      severity: "Moderate",
      reporterNumber: "745214578",
      reporterName: "Arnab Goswami",
      long: "78.11594943563958",
      lat: "9.880326080573832",
      pincode: "110110",
      reportingLocation: "Madurai",
      description:
        "Varun is very sad that he cannot attend school. His mental health has detoriated and needs immediate attention.",
      name: "Varun",
      photo:
        "https://lazy-singletons-sih-2022.s3.ap-south-1.amazonaws.com/anonymous-user-13.png",
      reportId: "454943",
      nearestStcPincode: "110010",
    };

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

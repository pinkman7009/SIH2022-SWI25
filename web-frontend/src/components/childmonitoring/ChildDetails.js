import React, { useState, useEffect } from "react";
import GeneralProfile from "./GeneralProfile";
import ChildMonitoring from "./ChildMonitoring";
import CheckpointsTable from "./CheckpointsTable";
import { useDispatch } from "react-redux";
import { fetchChild } from "../../store/actions/childAction";
import { useParams } from "react-router-dom";
import Loader from "../Loader";

const ChildDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const [child, setChild] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getChild = async () => {
      const data = await dispatch(fetchChild(id));

      setChild(data[0]);

      setLoading(false);
    };

    if (id) getChild();
  }, []);

  // if (Object.keys(child).length === 0) {
  //   return <Loader />;
  // }

  console.log({ child });

  return (
    <div className="p-6">
      <h3 className="text-[1.5rem]">Child Details</h3>
      <div className="border-b-2 border-gray-400 w-1/4"></div>
      <GeneralProfile child={child} />

      <CheckpointsTable />
    </div>
  );
};

export default ChildDetails;

import React, { useState, useEffect } from "react";
import GeneralProfile from "./GeneralProfile";
import ChildMonitoring from "./ChildMonitoring";
import CheckpointsTable from "./CheckpointsTable";
import { useDispatch } from "react-redux";
import { fetchChild } from "../../store/actions/childAction";
import { useParams } from "react-router-dom";
import Loader from "../Loader";
import AdditionalDetails from "./AdditionalDetails";

const ChildDetails = () => {
  const dispatch = useDispatch();
  const { _id } = useParams();

  const [child, setChild] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getChild = async () => {
      const data = await dispatch(fetchChild(_id));

      setChild(data[0]);

      setLoading(false);
    };

    if (_id) getChild();
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

      <CheckpointsTable
        tableName={"Pre Rescue"}
        rows={[
          {
            key: 1,
            state: "Send rescue team",
            remarks: "First complete the previous task",
          },
          {
            key: 2,
            state: "Evidence collection",
            remarks: "First complete the previous task",
          },
          {
            key: 3,
            state: "Age Verification",
            remarks: "First complete the previous task",
          },
          {
            key: 4,
            state: "Immediate Aid",
            remarks: "First complete the previous task",
          },
        ]}
      />
      <CheckpointsTable
        tableName={"Post Rescue"}
        rows={[
          {
            key: 1,
            state: "Register FIR",
            remarks: "First complete the previous task",
          },
          {
            key: 2,
            state: "Conduct Medical Examination",
            remarks: "First complete the previous task",
          },
          {
            key: 3,
            state: "Counselling and vocational Training",
            remarks: "First complete the previous task",
          },
        ]}
      />
      <AdditionalDetails />
    </div>
  );
};

export default ChildDetails;

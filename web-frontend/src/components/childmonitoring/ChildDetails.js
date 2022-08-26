import React, { useState, useEffect } from "react";
import GeneralProfile from "./GeneralProfile";
import ChildMonitoring from "./ChildMonitoring";
import CheckpointsTable from "./CheckpointsTable";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loader from "../Loader";

import AdditionalDetails from "./AdditionalDetails";

import { fetchGrievanceFromId } from "../../store/actions/grievanceAction";
import InspectionTable from "./InspectionTable";
import { PrimaryButton } from "../Buttons";

const ChildDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const reports = useSelector((state) => state.grievances);

  const [preRescueDetails, setPreRescueDetails] = useState([
    "Rescue team has been sent",
    "",
    "",
    "",
  ]);

  const [postRescueDetails, setPostRescueDetails] = useState(["", "", "", ""]);

  useEffect(() => {
    dispatch(fetchGrievanceFromId(id));
  }, []);

  return (
    <div className="p-6">
      <h3 className="text-[1.5rem]">Child Details</h3>
      <div className="border-b-2 border-gray-400 w-1/4"></div>
      {reports.length > 0 ? <GeneralProfile report={reports} /> : null}

      <CheckpointsTable
        tableName={"Pre Rescue"}
        rows={[
          {
            key: 1,
            state: "Send rescue team",
            processedOn: "",
            remarks: preRescueDetails[0],
          },
          {
            key: 2,
            state: "Evidence collection",
            processedOn: "",
            remarks: preRescueDetails[1],
          },
          {
            key: 3,
            state: "Age Verification",
            processedOn: "",
            remarks: preRescueDetails[2],
          },
          {
            key: 4,
            state: "Rehabilitation Details",
            processedOn: "",
            remarks: preRescueDetails[3],
          },
        ]}
      />
      <CheckpointsTable
        tableName={"Post Rescue"}
        rows={[
          {
            key: 1,
            state: "Preliminary Child Information",
            processedOn: "",
            remarks: postRescueDetails[0],
          },
          {
            key: 2,
            state: "Register FIR",
            processedOn: "",
            remarks: postRescueDetails[0],
          },
          {
            key: 3,
            state: "Conduct Medical Examination",
            processedOn: "",
            remarks: postRescueDetails[1],
          },
          {
            key: 4,
            state: "Counselling and Vocational Training",
            processedOn: "",
            remarks: postRescueDetails[2],
          },
        ]}
      />
      <InspectionTable />
      <CheckpointsTable
        tableName={"Schemes and Measures"}
        rows={[
          {
            key: 1,
            state: "Integrated Child Development Scheme",
            processedOn: "",
            remarks: postRescueDetails[0],
          },
          {
            key: 2,
            state: "Apki Beti Hamari Beti",
            processedOn: "",
            remarks: postRescueDetails[0],
          },
          {
            key: 3,
            state: "Integrated Child Protection Scheme",
            processedOn: "",
            remarks: postRescueDetails[1],
          },
          {
            key: 4,
            state: "Sukanya Samriddhi Yojna",
            processedOn: "",
            remarks: postRescueDetails[2],
          },
        ]}
      />
      <AdditionalDetails />

      <div className="flex justify-center items-center">
        <PrimaryButton
          text="Print Report"
          handleClick={() => {
            window.print();
          }}
        />
      </div>
    </div>
  );
};

export default ChildDetails;

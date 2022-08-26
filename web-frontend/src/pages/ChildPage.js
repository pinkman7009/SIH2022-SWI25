import React, { useState } from "react";
import { PrimaryButton } from "../components/Buttons";
import { FaUserAlt } from "react-icons/fa";
import CheckpointsTable from "../components/childmonitoring/CheckpointsTable";
import AdditionalDetails from "../components/childmonitoring/AdditionalDetails";
import InspectionTable from "../components/childmonitoring/InspectionTable";
import GeneralProfile from "../components/childmonitoring/GeneralProfile";

const ChildPage = () => {
  const [preRescueDetails, setPreRescueDetails] = useState([
    "Rescue team has been sent",
    "",
    "",
    "",
  ]);

  const [postRescueDetails, setPostRescueDetails] = useState(["", "", "", ""]);
  return (
    <div className="p-6">
      <h3 className="text-[1.5rem]">Child Details</h3>
      <div className="border-b-2 border-gray-400 w-1/4"></div>
      {/* {reports.length > 0 ? <GeneralProfile report={reports} /> : null} */}

      <div className="m-6">
        <h2 className="font-bold text-2xl">Report Details</h2>
        <div className="border-primary border-2 shadow-md my-3 p-6 rounded-lg w-4/5 mx-auto flex justify-evenly items-center">
          <div className="w-1/2">
            <div className="flex items-center justify-between my-3">
              <p className="text-primary font-bold text-lg">Report Id:</p>
              <p>45684</p>
            </div>
            <div className="flex items-center justify-between my-3">
              <p className="text-primary font-bold text-lg">Name of Child:</p>
              <p>Varun</p>
            </div>
            <div className="flex items-center justify-between my-3">
              <p className="text-primary font-bold text-lg">Description:</p>
              <p className="text-right pl-6">
                Varun is very sad that he cannot attend school. His mental
                health has detoriated and needs immediate attention.
              </p>
            </div>
            <div className="flex items-center justify-between my-3">
              <p className="text-primary font-bold text-lg">Pincode:</p>
              <p>110110</p>
            </div>
            <div className="flex items-center justify-between my-3">
              <p className="text-primary font-bold text-lg">Reporter Name:</p>
              <p>Arnab Goswami</p>
            </div>
            <div className="flex items-center justify-between my-3">
              <p className="text-primary font-bold text-lg">
                Reporting Location:
              </p>
              <p>Madurai</p>
            </div>
            <div className="flex items-center justify-between my-3">
              <p className="text-primary font-bold text-lg">Severity:</p>
              <p>Moderate</p>
            </div>
            <div className="flex items-center justify-between my-3">
              <p className="text-primary font-bold text-lg">Status:</p>
              <p>Accepted</p>
            </div>
          </div>

          <div className="h-40 w-40 bg-gray-400 p-6 rounded-full flex items-center justify-center">
            <div className="user-svg">
              <FaUserAlt />
            </div>
          </div>
        </div>
      </div>

      <CheckpointsTable
        isChild={true}
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
        isChild={true}
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
        isChild={true}
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

export default ChildPage;

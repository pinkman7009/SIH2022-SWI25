import React from "react";
import { FaUserAlt } from "react-icons/fa";

const GeneralProfile = ({ report }) => {
  const {
    description,
    name,
    photo,
    pincode,
    reportId,
    reporterName,
    reportingLocation,
    severity,
    status,
  } = report[0];
  return (
    <div className="m-6">
      <h2 className="font-bold text-2xl">Report Details</h2>
      <div className="border-primary border-2 shadow-md my-3 p-6 rounded-lg w-4/5 mx-auto flex justify-evenly items-center">
        <div className="w-1/2">
          <div className="flex items-center justify-between my-3">
            <p className="text-primary font-bold text-lg">Report Id:</p>
            <p>{reportId}</p>
          </div>
          <div className="flex items-center justify-between my-3">
            <p className="text-primary font-bold text-lg">Name of Child:</p>
            <p>{name}</p>
          </div>
          <div className="flex items-center justify-between my-3">
            <p className="text-primary font-bold text-lg">Description:</p>
            <p className="text-right pl-6">{description}</p>
          </div>
          <div className="flex items-center justify-between my-3">
            <p className="text-primary font-bold text-lg">Pincode:</p>
            <p>{pincode}</p>
          </div>
          <div className="flex items-center justify-between my-3">
            <p className="text-primary font-bold text-lg">Reporter Name:</p>
            <p>{reporterName}</p>
          </div>
          <div className="flex items-center justify-between my-3">
            <p className="text-primary font-bold text-lg">
              Reporting Location:
            </p>
            <p>{reportingLocation}</p>
          </div>
          <div className="flex items-center justify-between my-3">
            <p className="text-primary font-bold text-lg">Severity:</p>
            <p>{severity}</p>
          </div>
          <div className="flex items-center justify-between my-3">
            <p className="text-primary font-bold text-lg">Status:</p>
            <p>{status}</p>
          </div>
        </div>

        <div className="h-40 w-40 bg-gray-400 p-6 rounded-full flex items-center justify-center">
          <div className="user-svg">
            <FaUserAlt />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralProfile;

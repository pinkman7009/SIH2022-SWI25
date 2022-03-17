import React from "react";
import { PrimaryButton } from "../Buttons";

const GrievanceItem = ({ grievance }) => {
  const { _id, childName, description } = grievance;

  return (
    <div className="border-2 border-primary shadow-xl rounded-xl p-6 flex w-full my-6 relative">
      <div className="h-32 w-32 bg-gray-400 p-6 rounded-full"></div>
      <div className="border-r-2 border-gray-400 mx-6"></div>
      <div>
        <div className="flex my-3">
          <p className="text-gray-400 font-bold text-md mr-3">ID</p>
          <p>{_id}</p>
        </div>
        <div className="flex my-3">
          <p className="text-gray-400 font-bold text-md mr-3">Name</p>
          <p>{childName}</p>
        </div>
        <div className="flex my-3">
          <p className="text-gray-400 font-bold text-md mr-3">Description</p>
          <p>{description}</p>
        </div>
      </div>
      <div className="absolute bottom-5 right-5">
        <PrimaryButton text="Details" />
      </div>
    </div>
  );
};

export default GrievanceItem;

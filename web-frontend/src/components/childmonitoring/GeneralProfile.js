import React from "react";
import { FaUserAlt } from "react-icons/fa";

const GeneralProfile = ({ child }) => {
  const {
    Caste,
    FatherName,
    MotherName,
    Religion,
    aadhaar,
    currentAddress,
    dateOfBirth,
    gender,
    name,
    _id,
  } = child;
  return (
    <div className="m-6">
      <h2 className="font-bold text-2xl">General Details</h2>
      <div className="border-primary border-2 shadow-md my-3 p-6 rounded-lg w-3/5 mx-auto flex justify-evenly items-center">
        <div className="w-1/2">
          <div className="flex items-center justify-between my-3">
            <p className="text-primary font-bold text-lg">Name of Child:</p>
            <p>{name}</p>
          </div>
          <div className="flex items-center justify-between my-3">
            <p className="text-primary font-bold text-lg">Sex:</p>
            <p>{gender}</p>
          </div>
          <div className="flex items-center justify-between my-3">
            <p className="text-primary font-bold text-lg">Father's Name:</p>
            <p>{FatherName}</p>
          </div>
          <div className="flex items-center justify-between my-3">
            <p className="text-primary font-bold text-lg">Mother's Name:</p>
            <p>{MotherName}</p>
          </div>
          <div className="flex items-center justify-between my-3">
            <p className="text-primary font-bold text-lg">Date of Birth:</p>
            <p>{dateOfBirth}</p>
          </div>
          <div className="flex items-center justify-between my-3">
            <p className="text-primary font-bold text-lg">Religion:</p>
            <p>{Religion}</p>
          </div>
          <div className="flex items-center justify-between my-3">
            <p className="text-primary font-bold text-lg">Caste:</p>
            <p>{Caste}</p>
          </div>
          <div className="flex items-center justify-between my-3">
            <p className="text-primary font-bold text-lg">Aadhaar No.:</p>
            <p>{aadhaar}</p>
          </div>
          <div className="flex items-center justify-between my-3">
            <p className="text-primary font-bold text-lg">Current Address</p>
            <p>{currentAddress}</p>
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

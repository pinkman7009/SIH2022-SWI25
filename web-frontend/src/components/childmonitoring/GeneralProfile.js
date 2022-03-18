import React from "react";
import { FaUserAlt } from "react-icons/fa";

const GeneralProfile = ({ child }) => {
  return (
    <div className="m-6">
      <h2 className="font-bold text-2xl">General Details</h2>
      <div className="border-primary border-2 shadow-md my-3 p-6 rounded-lg w-3/5 mx-auto flex justify-evenly items-center">
        <div className="w-1/2">
          <div className="flex items-center justify-between my-3">
            <p className="text-primary font-bold text-lg">Name of Child:</p>
            <p>Nishnata Debnath</p>
          </div>
          <div className="flex items-center justify-between my-3">
            <p className="text-primary font-bold text-lg">Sex:</p>
            <p>Male</p>
          </div>
          <div className="flex items-center justify-between my-3">
            <p className="text-primary font-bold text-lg">Father's Name:</p>
            <p>Nishnata Debnath</p>
          </div>
          <div className="flex items-center justify-between my-3">
            <p className="text-primary font-bold text-lg">Mother's Name:</p>
            <p>Nishnata Debnath</p>
          </div>
          <div className="flex items-center justify-between my-3">
            <p className="text-primary font-bold text-lg">Date of Birth:</p>
            <p>19/12/2022</p>
          </div>
          <div className="flex items-center justify-between my-3">
            <p className="text-primary font-bold text-lg">Religion:</p>
            <p>Hindu</p>
          </div>
          <div className="flex items-center justify-between my-3">
            <p className="text-primary font-bold text-lg">Caste:</p>
            <p>OBC</p>
          </div>
          <div className="flex items-center justify-between my-3">
            <p className="text-primary font-bold text-lg">Aadhaar No.:</p>
            <p>89883344</p>
          </div>
          <div className="flex items-center justify-between my-3">
            <p className="text-primary font-bold text-lg">Current Address</p>
            <p>MG Road, Delhi</p>
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

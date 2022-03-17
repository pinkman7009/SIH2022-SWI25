import React from "react";
import { PrimaryButton } from "../Buttons";
import acceptSvg from "../../assets/accepted.svg";
import denySvg from "../../assets/denied.svg";
import { FaUserAlt } from "react-icons/fa";

const GrievanceItem = ({ grievance }) => {
  const { _id, childName, description } = grievance;

  return (
    <div className="border-2 border-primary shadow-xl rounded-xl p-6 flex justify-between w-full my-6">
      <div className="h-32 w-32 bg-gray-400 p-6 rounded-full flex justify-center items-center">
        <div className="user-svg">
          <FaUserAlt />
        </div>
      </div>
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
      <div>
        <button
          className={`transition-all ease-in p-2 w-32
      text-green-500 my-3 text-sm rounded font-bold border-dashed border-2 border-green-500 hover:bg-green-500 hover:text-white flex justify-evenly items-center`}
          // onClick={acceptClick}
        >
          <img src={acceptSvg} alt="accept" className="h-6" />
          Accept
        </button>

        <button
          className={`transition-all ease-in p-2 w-32 text-red-500 my-3 text-sm rounded font-bold border-dashed border-2 border-red-500 hover:bg-red-500 hover:text-white flex justify-evenly items-center`}
          // onClick={deniedClick}
        >
          <img src={denySvg} alt="reject" className="h-6" />
          Reject
        </button>

        <PrimaryButton text="Details" />
      </div>
    </div>
  );
};

export default GrievanceItem;

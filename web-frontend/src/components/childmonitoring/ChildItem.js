import React from "react";
import { PrimaryButton } from "../Buttons";

const ChildItem = ({ child }) => {
  const { _id, name, phone, aadhaar, currentAddress } = child;

  return (
    <div className="border-2 border-primary shadow-xl rounded-xl p-6 flex w-full my-6 relative">
      <div className="h-32 w-32 bg-gray-400 p-6 rounded-full"></div>
      <div className="border-r-2 border-gray-400 mx-6"></div>
      <div>
        <div className="flex">
          <h2 className="text-xl">{name}</h2>
          <p className="ml-3 text-gray-400">#{_id}</p>
        </div>
        <div className="flex my-3">
          <p className="text-gray-400 font-bold text-md mr-3">Phone No:</p>
          <p>{phone}</p>
        </div>
        <div className="flex my-3">
          <p className="text-gray-400 font-bold text-md mr-3">Aadhaar No:</p>
          <p>{aadhaar}</p>
        </div>
        <div className="flex my-3">
          <p className="text-gray-400 font-bold text-md mr-3">
            Current Residence
          </p>
          <p>{currentAddress}</p>
        </div>
      </div>
      <div className="absolute bottom-5 right-5">
        <PrimaryButton text="Details" />
      </div>
    </div>
  );
};

export default ChildItem;

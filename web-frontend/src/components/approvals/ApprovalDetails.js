import React from "react";
import { useSelector } from "react-redux";
import { PrimaryButton } from "../Buttons";
import { FaUserAlt } from "react-icons/fa";

const ApprovalDetails = () => {
  const role = useSelector((state) => state.role);

  console.log({ role });

  return (
    <div className="m-6">
      <h2 className="font-bold text-2xl">Approval Details</h2>
      <div className="border-primary border-2 shadow-md my-3 p-6 rounded-lg w-4/5 mx-auto flex justify-evenly items-center">
        <div className="w-1/2">
          <div className="flex items-center justify-between my-3">
            <p className="text-primary font-bold text-lg">Report Id:</p>
            <p>454943</p>
          </div>
          <div className="flex items-center justify-between my-3">
            <p className="text-primary font-bold text-lg">Name of Child:</p>
            <p>Varun</p>
          </div>
          {role === "NGO" ? (
            <>
              <div className="flex items-center justify-between my-3">
                <p className="text-primary font-bold text-lg">
                  Last Inspection Date
                </p>
                <p>21st August, 2022</p>
              </div>
              <div className="flex items-center justify-between my-3">
                <p className="text-primary font-bold text-lg">
                  Proof of last school attendance:
                </p>
                <PrimaryButton text="Upload document" />
              </div>
            </>
          ) : null}
        </div>
        <div className="h-40 w-40 bg-gray-400 p-6 rounded-full flex items-center justify-center">
          <div className="user-svg">
            <FaUserAlt />
          </div>
        </div>
      </div>
      <div className="border-primary border-2 shadow-md my-3 p-6 rounded-lg w-4/5 mx-auto">
        <div>
          I{" "}
          <input
            type="text"
            placeholder="Full name"
            className="p-1 px-3 bg-neutral-200 border-1 border-solid border-primary"
          />{" "}
          under the designation{" "}
          <input
            type="text"
            placeholder="Desingnation Name"
            className="p-1 px-3 bg-neutral-200 border-1 border-solid border-primary"
          />{" "}
          of{" "}
          <input
            type="text"
            placeholder="Organisation Name"
            className="p-1 px-3 bg-neutral-200 border-1 border-solid border-primary"
          />{" "}
          hereby confirm to the best of my knowledge that the above stated
          information is accurate.
        </div>
        <div className="flex justify-center items-center">
          <PrimaryButton text="Submit Approval" size="large" />
        </div>
      </div>
    </div>
  );
};

export default ApprovalDetails;

import React from "react";
import { PrimaryButton } from "../Buttons";

const AddChildForm = () => {
  return (
    <div className="p-6 border-2 border-primary rounded-md m-6">
      <h3 className="text-[1.5rem]">Add Child Information</h3>
      <div className="border-b-2 border-gray-400 w-1/4"></div>

      <div className="flex justify-around items-center w-full mx-auto mt-6">
        <div className="h-32 w-32 bg-gray-400 p-6 rounded-full"></div>
        <input
          type="text"
          className="rounded-lg shadow-lg p-3 h-12 w-1/4 border-2 border-primary my-6"
          placeholder="Name of child"
        />
        <input
          type="email"
          className="rounded-lg shadow-lg p-3 h-12 w-1/4 border-2 border-primary my-6"
          placeholder="Sex"
        />
        <input
          type="date"
          className="rounded-lg shadow-lg p-3 h-12 w-1/4 border-2 border-primary my-6"
          placeholder="Date of Birth"
        />
      </div>

      <div className="grid grid-cols-2 w-3/4 mx-auto">
        <div className="flex items-center justify-between justify-between mr-16">
          <p className="mr-3">Father's Name</p>
          <input
            type="text"
            className="rounded-lg shadow-lg shadow-lg p-3 h-12 w-2/3 border-2 border-primary my-6"
          />
        </div>
        <div className="flex items-center justify-between mr-16">
          <p className="mr-3">Mother's Name</p>
          <input
            type="text"
            className="rounded-lg shadow-lg p-3 h-12 w-2/3 border-2 border-primary my-6"
          />
        </div>
        <div className="flex items-center justify-between mr-16">
          <p className="mr-3">Education</p>
          <input
            type="text"
            className="rounded-lg shadow-lg p-3 h-12 w-2/3 border-2 border-primary my-6"
          />
        </div>
        <div className="flex items-center justify-between mr-16">
          <p className="mr-3">Religion</p>
          <input
            type="text"
            className="rounded-lg shadow-lg p-3 h-12 w-2/3 border-2 border-primary my-6"
          />
        </div>
        <div className="flex items-center justify-between mr-16">
          <p className="mr-3">Category</p>
          <input
            type="text"
            className="rounded-lg shadow-lg p-3 h-12 w-2/3 border-2 border-primary my-6"
          />
        </div>
        <div className="flex items-center justify-between mr-16">
          <p className="mr-3">Caste</p>
          <input
            type="text"
            className="rounded-lg shadow-lg p-3 h-12 w-2/3 border-2 border-primary my-6"
          />
        </div>
        <div className="flex justify-between mr-16 my-6">
          <p className="mr-3">Address</p>
          <textarea className="rounded-lg shadow-lg p-3 h-32 w-2/3 border-2 border-primary" />
        </div>
        <div className="flex justify-between mr-16 my-6">
          <p className="mr-3">Aadhaar No.</p>
          <input
            type="text"
            className="rounded-lg shadow-lg p-3 h-12 w-2/3 border-2 border-primary"
          />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <PrimaryButton text="Submit" />
      </div>
    </div>
  );
};

export default AddChildForm;

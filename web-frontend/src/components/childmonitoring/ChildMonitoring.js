import React, { useState } from "react";
import { BiHealth } from "react-icons/bi";

const Education = () => {
  return (
    <div className="w-1/2">
      <div className="flex items-center justify-between">
        <p className="font-bold text-lg">
          Has rescued child been enrolled in school?
        </p>
        <select
          name="schoolEnrolment"
          className="rounded-lg shadow-lg p-3 h-12 w-1/3 border-2 border-primary my-6 bg-white"
        >
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>
      <div className="flex items-center justify-between">
        <p className="font-bold text-lg">School Type</p>
        <select
          name="schoolType"
          className="rounded-lg shadow-lg p-3 h-12 w-1/3 border-2 border-primary my-6 bg-white"
        >
          <option value="Yes">Government</option>
          <option value="No">Private</option>
        </select>
      </div>
      <div className="flex items-center justify-between">
        <p className="font-bold text-lg">
          Which class rescued child is enrolled in?
        </p>
        <input
          type="number"
          className="rounded-lg shadow-lg p-3 h-12 w-1/3 border-2 border-primary my-6 bg-white"
        />
      </div>
      <div className="flex items-center justify-between">
        <p className="font-bold text-lg">
          Is rescued child getting free dresses?
        </p>
        <select
          name="freeDress"
          className="rounded-lg shadow-lg p-3 h-12 w-1/3 border-2 border-primary my-6 bg-white"
        >
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>
      <div className="flex items-center justify-between">
        <p className="font-bold text-lg">Upload Document for verification</p>
        <input
          class="form-control
    block
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          type="file"
          id="formFile"
        />
      </div>
    </div>
  );
};
const Health = () => {
  return (
    <div className="w-1/2">
      <div className="flex items-center justify-between">
        <p className="font-bold">Has rescued child been enrolled in school?</p>
        <input
          type="text"
          className="rounded-lg shadow-lg p-3 h-12 w-1/4 border-2 border-primary my-6"
          placeholder="Name of child"
        />
      </div>
    </div>
  );
};
const Family = () => {
  return (
    <div className="w-1/2">
      <div className="flex items-center justify-between">
        <p className="font-bold">Has rescued child been enrolled in school?</p>
        <input
          type="text"
          className="rounded-lg shadow-lg p-3 h-12 w-1/4 border-2 border-primary my-6"
          placeholder="Name of child"
        />
      </div>
    </div>
  );
};
const Id = () => {
  return (
    <div className="w-1/2">
      <div className="flex items-center justify-between">
        <p className="font-bold">Has rescued child been enrolled in school?</p>
        <input
          type="text"
          className="rounded-lg shadow-lg p-3 h-12 w-1/4 border-2 border-primary my-6"
          placeholder="Name of child"
        />
      </div>
    </div>
  );
};

const ChildMonitoring = () => {
  const [tab, setTab] = useState(0);

  return (
    <div className="m-6">
      <h2 className="font-bold text-2xl">Child Monitoring</h2>

      <div className="my-6">
        <div className="flex items-center justify-evenly">
          <div
            className={`border-primary ${
              tab === 0 ? "bg-primary text-white" : "text-primary"
            } border-2 rounded-t-2xl p-3  w-1/5 flex justify-center items-center cursor-pointer hover:bg-primary hover:text-white transition-all ease-in font-bold`}
            onClick={() => setTab(0)}
          >
            Educational History
          </div>
          <div
            className={`border-primary ${
              tab === 1 ? "bg-primary text-white" : "text-primary"
            } border-2 rounded-t-2xl p-3  w-1/5 flex justify-center items-center cursor-pointer hover:bg-primary hover:text-white transition-all ease-in font-bold`}
            onClick={() => setTab(1)}
          >
            Health History
          </div>
          <div
            className={`border-primary ${
              tab === 2 ? "bg-primary text-white" : "text-primary"
            } border-2 rounded-t-2xl p-3  w-1/5 flex justify-center items-center cursor-pointer hover:bg-primary hover:text-white transition-all ease-in font-bold`}
            onClick={() => setTab(2)}
          >
            Family Details
          </div>
          <div
            className={`border-primary  ${
              tab === 3 ? "bg-primary text-white" : "text-primary"
            } border-2 rounded-t-2xl p-3  w-1/5 flex justify-center items-center cursor-pointer hover:bg-primary hover:text-white transition-all ease-in font-bold`}
            onClick={() => setTab(3)}
          >
            ID Details
          </div>
        </div>
        <div className="border-primary border-2 p-6 rounded-md ">
          {tab === 0
            ? Education()
            : tab === 1
            ? Health()
            : tab === 2
            ? Family()
            : Id()}
        </div>
      </div>
    </div>
  );
};

export default ChildMonitoring;

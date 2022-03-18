import React from "react";
import GeneralProfile from "./GeneralProfile";
import ChildMonitoring from "./ChildMonitoring";

const ChildDetails = () => {
  return (
    <div className="p-6">
      <h3 className="text-[1.5rem]">Child Details</h3>
      <div className="border-b-2 border-gray-400 w-1/4"></div>
      <GeneralProfile />
      <ChildMonitoring />
    </div>
  );
};

export default ChildDetails;

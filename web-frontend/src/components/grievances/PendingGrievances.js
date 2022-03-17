import React from "react";
import GrievanceList from "./GrievanceList";

const PendingGrievances = () => {
  return (
    <div className="p-6">
      <h3 className="text-[1.5rem]">Pending Grievances</h3>
      <div className="border-b-2 border-gray-400 w-1/4"></div>
      <GrievanceList />
    </div>
  );
};

export default PendingGrievances;

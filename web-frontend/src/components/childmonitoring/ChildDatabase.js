import React from "react";
import ChildList from "./ChildList";

const ChildDatabase = () => {
  return (
    <div className="p-6">
      <h3 className="text-[1.5rem]">Child Database</h3>
      <div className="border-b-2 border-gray-400 w-1/4"></div>
      <ChildList />
    </div>
  );
};

export default ChildDatabase;

import React, { useState, useEffect } from "react";
import ApprovalItem from "./ApprovalsItem";
import mapSvg from "../../assets/map.svg";

const ApprovalsList = ({ grievances, pending }) => {
  return (
    <div className="flex justify-center items-start">
      <div className="w-4/5">
        <ApprovalItem pending={pending} />
      </div>
    </div>
  );
};

export default ApprovalsList;

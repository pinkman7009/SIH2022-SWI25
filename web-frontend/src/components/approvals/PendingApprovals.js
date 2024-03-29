import React, { useState, useEffect } from "react";
import ApprovalsList from "./ApprovalsList";
import { useDispatch, useSelector } from "react-redux";

const PendingApprovals = () => {
  //   const dispatch = useDispatch();

  // //   let grievances = useSelector((state) => state.grievances);

  //   useEffect(() => {
  //     dispatch(fetchGrievances());
  //   }, []);

  //   grievances = grievances?.filter((item) => item.status === "Pending");

  return (
    <div className="p-6">
      <h3 className="text-[1.5rem]">Pending Approvals</h3>
      <div className="border-b-2 border-gray-400 w-1/4"></div>
      <ApprovalsList />
    </div>
  );
};

export default PendingApprovals;

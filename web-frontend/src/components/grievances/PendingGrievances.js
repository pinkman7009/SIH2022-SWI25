import React, { useState, useEffect } from "react";
import GrievanceList from "./GrievanceList";
import { useDispatch, useSelector } from "react-redux";
import { fetchGrievances } from "../../store/actions/grievanceAction";

const PendingGrievances = () => {
  const dispatch = useDispatch();

  let grievances = useSelector((state) => state.grievances);

  useEffect(() => {
    dispatch(fetchGrievances());
  }, []);

  grievances = grievances?.filter((item) => item.status === "Pending");

  return (
    <div className="p-6">
      <h3 className="text-[1.5rem]">Pending Reports</h3>
      <div className="border-b-2 border-gray-400 w-1/4"></div>

      <div className="flex justify-between">
        {grievances.length === 0 ? (
          <h2 className="text-lg font-bold my-3 border-2 rounded text-center p-3">
            There are no pending reports
          </h2>
        ) : (
          <GrievanceList grievances={grievances} pending={true} />
        )}
        <div className="bg-white border-primary border-2 rounded-md text-black w-1/5 p-6 h-2/5 m-6 ">
          <p className="text-primary font-bold text-xl">Filters</p>

          <p className="text-md my-3 font-bold">Severity Redressal Value</p>
          <div className="flex items-center my-3">
            <input type="checkbox" className="h-4 w-4 mr-6" />
            <p>Low</p>
          </div>
          <div className="flex items-center my-3">
            <input type="checkbox" className="h-4 w-4 mr-6" />
            <p>Moderate</p>
          </div>
          <div className="flex items-center my-3">
            <input type="checkbox" className="h-4 w-4 mr-6" />
            <p>High </p>
          </div>
          <div className="flex items-center my-3">
            <input type="checkbox" className="h-4 w-4 mr-6" />
            <p>Critical</p>
          </div>
          <p className="text-md my-3 font-bold">Complaint Category</p>
          <div className="flex items-center my-3">
            <input type="checkbox" className="h-4 w-4 mr-6" />
            <p>Trafficking</p>
          </div>
          <div className="flex items-center my-3">
            <input type="checkbox" className="h-4 w-4 mr-6" />
            <p>Sexual Exploitation</p>
          </div>
          <div className="flex items-center my-3">
            <input type="checkbox" className="h-4 w-4 mr-6" />
            <p>Debt Bondage</p>
          </div>
          <div className="flex items-center my-3">
            <input type="checkbox" className="h-4 w-4 mr-6" />
            <p>Slavery</p>
          </div>
          <div className="flex items-center my-3">
            <input type="checkbox" className="h-4 w-4 mr-6" />
            <p>Forced Labour</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PendingGrievances;

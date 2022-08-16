import React, { useEffect } from "react";
import GrievanceList from "./GrievanceList";
import { useDispatch, useSelector } from "react-redux";
import { fetchGrievances } from "../../store/actions/grievanceAction";

const PendingGrievances = () => {
  const dispatch = useDispatch();

  let grievances = useSelector((state) => state.grievances.reports);

  useEffect(() => {
    dispatch(fetchGrievances());
  }, []);

  grievances = grievances?.filter((item) => item.status === "Pending");

  return (
    <div className="p-6">
      <h3 className="text-[1.5rem]">Pending Grievances</h3>
      <div className="border-b-2 border-gray-400 w-1/4"></div>
      <GrievanceList grievances={grievances} pending={true} />
    </div>
  );
};

export default PendingGrievances;

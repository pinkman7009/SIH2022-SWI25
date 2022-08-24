import React, { useEffect } from "react";
import GrievanceList from "./GrievanceList";
import { useDispatch, useSelector } from "react-redux";
import { fetchGrievances } from "../../store/actions/grievanceAction";

const AcceptedGrievances = () => {
  const dispatch = useDispatch();
  let grievances = useSelector((state) => state.grievances);
  useEffect(() => {
    dispatch(fetchGrievances());
  }, []);

  grievances = grievances.filter((item) => item.status === "Accepted");
  return (
    <div className="p-6">
      <h3 className="text-[1.5rem]">Accepted Grievances</h3>
      <div className="border-b-2 border-gray-400 w-1/4"></div>
      <GrievanceList grievances={grievances} pending={false} />
    </div>
  );
};

export default AcceptedGrievances;

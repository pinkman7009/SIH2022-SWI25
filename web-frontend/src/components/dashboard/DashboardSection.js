import React, { useEffect } from "react";
import { AddButton } from "../Buttons";
import Map from "../Map";
import Charts from "./Charts";
import numberSvg from "../../assets/mark.svg";
import personSvg from "../../assets/person.svg";
import grievanceSvg from "../../assets/underperform.svg";
import { useSelector, useDispatch } from "react-redux";
import { fetchGrievances } from "../../store/actions/grievanceAction";

const DashboardSection = () => {
  const grievances = useSelector((state) => state.grievances.reports);
  const dispatch = useDispatch();

  const pendingGrievances = grievances?.filter(
    (item) => item.status === "Pending"
  );

  useEffect(() => {
    if (!grievances) dispatch(fetchGrievances());
  }, []);

  return (
    <div className="p-6">
      <div className="flex items-center justify-between">
        <div className="w-1/4">
          <h3 className="text-[1.5rem]">Dashboard</h3>
          <div className="border-b-2 border-gray-400 w-full"></div>
        </div>
        <div className="w-1/5 flex justify-between items-center">
          {/* <AddButton text="Add Grievance" /> */}
          <AddButton text="Add Child" />
        </div>
      </div>
      <div className="flex w-full my-6 mx-auto">
        <div className="shadow-xl rounded-lg p-6 w-1/3 bg-lightBlue h-40 m-6">
          <div className="flex items-center">
            <div className="rounded-full bg-blue-100 h-16 w-16 m-3 flex items-center justify-center">
              <img src={numberSvg} alt="" />
            </div>
            <div>
              <p className="text-2xl font-bold">62</p>
              <p className="text-gray-500 mt-3">Number of Children</p>
            </div>
          </div>
        </div>
        <div className="shadow-xl rounded-lg p-6 w-1/3 bg-lightBlue h-40 m-6">
          <div className="flex items-center">
            <div className="rounded-full bg-blue-100 h-16 w-16 m-3 flex items-center justify-center">
              <img src={personSvg} alt="" />
            </div>
            <div>
              <p className="text-2xl font-bold">17.4</p>
              <p className="text-gray-500 mt-3">
                Average Response Time in Hours
              </p>
            </div>
          </div>
        </div>
        <div className="shadow-xl rounded-lg p-6 w-1/3 bg-lightBlue h-40 m-6">
          <div className="flex items-center">
            <div className="rounded-full bg-blue-100 h-16 w-16 m-3 flex items-center justify-center">
              <img src={grievanceSvg} alt="" />
            </div>
            <div>
              <p className="text-2xl font-bold">{pendingGrievances?.length}</p>
              <p className="text-gray-500 mt-3">Number of Pending Grievances</p>
            </div>
          </div>
        </div>
      </div>

      <Charts />
      <h3 className="text-2xl text-primary text-center">
        Locations of registered children
      </h3>
      <Map />
    </div>
  );
};

export default DashboardSection;

import React, { useEffect } from "react";
import { AddButton } from "../Buttons";
import Charts from "./Charts";
import numberSvg from "../../assets/mark.svg";
import personSvg from "../../assets/person.svg";
import grievanceSvg from "../../assets/underperform.svg";
import { useSelector, useDispatch } from "react-redux";
import { fetchGrievances } from "../../store/actions/grievanceAction";
import DashboardMap from "../DashboardMap";
import { fetchStats } from "../../store/actions/dashboardAction";
import { fetchChildren } from "../../store/actions/childAction";

const DashboardSection = () => {
  const grievances = useSelector((state) => state.grievances);
  const stats = useSelector((state) => state.statistics);
  const children = useSelector((state) => state.children);
  const dispatch = useDispatch();

  const pendingGrievances = grievances?.filter(
    (item) => item.status === "Pending"
  );

  useEffect(() => {
    dispatch(fetchGrievances());
    dispatch(fetchStats());
    dispatch(fetchChildren());
  }, []);

  const acceptedGrievances = grievances.filter(
    (item) => item.status === "Accepted"
  );

  console.log({ stats });

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
              <p className="text-2xl font-bold">{children.length}</p>
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

      {Object.keys(stats).length > 0 ? (
        <Charts stats={stats} />
      ) : (
        <div className="flex justify-center items-center m-3">
          <button
            disabled
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
          >
            <svg
              role="status"
              class="inline mr-3 w-4 h-4 text-white animate-spin"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="#E5E7EB"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentColor"
              />
            </svg>
            Loading...
          </button>
        </div>
      )}
      <h3 className="text-2xl text-primary text-center">
        Locations of registered children
      </h3>

      <DashboardMap acceptedGrievances={acceptedGrievances} />
    </div>
  );
};

export default DashboardSection;

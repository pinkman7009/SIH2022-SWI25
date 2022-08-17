import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiFillCaretDown, AiFillDashboard } from "react-icons/ai";
import { BiSad } from "react-icons/bi";
import { FaChild, FaMapMarkerAlt } from "react-icons/fa";
import NestedNav from "./NestedNav";

const LeftNavbar = () => {
  const [nestedChildlink, setNestedChildlink] = useState(false);
  const [nestedGrievancelink, setNestedGrievancelink] = useState(false);

  const nestedlinks = {
    grievances: [
      {
        title: "Pending Grievances",
        route: "grievances/pending",
      },
      {
        title: "Accepted Grievances",
        route: "grievances/accepted",
      },
    ],
    childMonitoring: [
      {
        title: "Child Database",
        route: "childmonitoring/childdatabase",
      },
      {
        title: "Add New Child",
        route: "childmonitoring/addchild",
      },
    ],
  };

  return (
    <div className="flex flex-col bg-primary top-0 fixed w-1/6 min-h-screen z-10 p-3 m-0 text-sm text-white">
      <div className="flex items-center">
        <img src="./logo.svg" alt="logo" className="h-16 w-16" />
        <div className="text-md">
          <p>Ministry of Labour and Employment</p>
          <p>Government of India</p>
        </div>
      </div>
      <div className="border-b-2 border-blue-200"></div>
      <div className="max-h-[85vh] mt-8 font-bold text-lg">
        <NavLink to="/" activeClassName="active">
          <div className="flex items-center transition-all p-3 hover:bg-secondary">
            <AiFillDashboard />
            <p className="ml-3">Dashboard</p>
          </div>
        </NavLink>

        <div>
          <div
            className="flex items-center justify-between transition-all p-3 cursor-pointer hover:bg-secondary"
            onClick={() => setNestedGrievancelink(!nestedGrievancelink)}
          >
            <div className="flex items-center">
              <BiSad />
              <p className="ml-3"> Grievances</p>
            </div>
            <AiFillCaretDown />
          </div>
          {nestedGrievancelink === true ? (
            <NestedNav links={nestedlinks.grievances} />
          ) : null}
        </div>

        <div>
          <div
            className="flex items-center justify-between transition-all p-3 cursor-pointer hover:bg-secondary"
            onClick={() => setNestedChildlink(!nestedChildlink)}
          >
            <div className="flex items-center">
              <FaChild />
              <p className="ml-3">Child Monitoring</p>
            </div>
            <AiFillCaretDown />
          </div>

          {nestedChildlink === true ? (
            <NestedNav links={nestedlinks.childMonitoring} />
          ) : null}
        </div>
        <NavLink to="/entitlementzone" activeClassName="active">
          <div className="flex items-center transition-all p-3 hover:bg-secondary">
            <FaMapMarkerAlt />
            <p className="ml-3">Entitlement Zone</p>
          </div>
        </NavLink>
      </div>
      <div className="border-b-2 border-blue-200 mt-8"></div>
    </div>
  );
};

export default LeftNavbar;

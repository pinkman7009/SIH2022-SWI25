import React, { useEffect } from "react";
import LeftNavbar from "../components/LeftNavbar";
import DashboardWindow from "../components/dashboard/DashboardWindow";

const Mainscreen = ({ role }) => {
  return (
    <>
      <div className="flex h-screen w-screen bg-primaryBg p-0 m-0">
        <LeftNavbar role={role} />
        <DashboardWindow />
      </div>
    </>
  );
};

export default Mainscreen;

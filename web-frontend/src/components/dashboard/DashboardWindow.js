import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import PendingGrievances from "../grievances/PendingGrievances";
import TopNavbar from "../TopNavbar";
import DashboardSection from "./DashboardSection";
import AddChildForm from "../childmonitoring/AddChildForm";
import ChildDatabase from "../childmonitoring/ChildDatabase";
import ChildDetails from "../childmonitoring/ChildDetails";

const DashboardWindow = () => {
  return (
    <div className="w-5/6 absolute top-0 right-0 mx-0 my-auto">
      <TopNavbar isLoggedIn={true} />
      <div className="relative">
        <Routes>
          <Route exact path="/" element={<DashboardSection />} />
          <Route
            exact
            path="/grievances/pending"
            element={<PendingGrievances />}
          />
          <Route
            exact
            path="/childmonitoring/addchild"
            element={<AddChildForm />}
          />
          <Route
            exact
            path="/childmonitoring/childdatabase"
            element={<ChildDatabase />}
          />
          <Route
            exact
            path="/childmonitoring/childdetails/:id"
            element={<ChildDetails />}
          />
        </Routes>
      </div>
      {/* {state.modal !== null ? (
        <Toast
          title={state.modal.title}
          handleClick={state.modal.handleClick}
        />
      ) : null} */}
    </div>
  );
};

export default DashboardWindow;

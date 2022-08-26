import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import PendingGrievances from "../grievances/PendingGrievances";
import PendingApprovals from "../approvals/PendingApprovals";
import ApprovalDetails from "../approvals/ApprovalDetails";
import AcceptedGrievances from "../grievances/AcceptedGrievances";
import TopNavbar from "../TopNavbar";
import DashboardSection from "./DashboardSection";
import AddChildForm from "../childmonitoring/AddChildForm";
import ChildDatabase from "../childmonitoring/ChildDatabase";
import ChildDetails from "../childmonitoring/ChildDetails";
import SchemesPage from "../../pages/SchemesPage";
import ChildLogin from "../../pages/ChildLogin";

const DashboardWindow = () => {
  const navigate = useNavigate();
  // useEffect(() => {
  //   navigate("/");
  // }, []);
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
            path="/approvals/pending"
            element={<PendingApprovals />}
          />
          <Route exact path="/approvaldetails" element={<ApprovalDetails />} />
          <Route
            exact
            path="/grievances/accepted"
            element={<AcceptedGrievances />}
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
          <Route exact path="/schemes" element={<SchemesPage />} />
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

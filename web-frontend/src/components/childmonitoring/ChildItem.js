import React from "react";
import { PrimaryButton } from "../Buttons";
import { FaUserAlt } from "react-icons/fa";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ChildItem = ({ child }) => {
  const { _id, name, phone, aadhaar, currentAddress, report } = child;
  const navigate = useNavigate();

  const { reporterName, reportingLocation, reporterNumber, reportId } = report;
  return (
    <div className="border-2 border-primary shadow-xl rounded-xl p-6 flex w-full my-6 relative">
      <div className="h-32 w-32 bg-gray-400 p-6 rounded-full flex items-center justify-center">
        <div className="user-svg">
          <FaUserAlt />
        </div>
      </div>
      <div className="border-r-2 border-gray-400 mx-6"></div>
      <div>
        <div className="flex">
          <h2 className="text-xl">{name}</h2>
          <p className="ml-3 text-gray-400">#{_id}</p>
        </div>
        {report ? (
          <>
            <div className="flex my-3">
              <p className="text-gray-400 font-bold text-md mr-3">Report ID:</p>
              <p>{report?.reportId}</p>
            </div>
            <div className="flex my-3">
              <p className="text-gray-400 font-bold text-md mr-3">
                Reporter Name:
              </p>
              <p>{reporterName}</p>
            </div>
            <div className="flex my-3">
              <p className="text-gray-400 font-bold text-md mr-3">
                Reporter Number:
              </p>
              <p>{reporterNumber}</p>
            </div>
            <div className="flex my-3">
              <p className="text-gray-400 font-bold text-md mr-3">
                Reporter Location:
              </p>
              <p>{reportingLocation}</p>
            </div>
            <div className="absolute bottom-5 right-5">
              <Link to={`/childmonitoring/childdetails/${report.reportId}`}>
                <PrimaryButton
                  size="large"
                  text="Add or Edit Details"
                  handleClick={() => {
                    navigate(
                      `/childmonitoring/childdetails/${report.reportId}`
                    );
                  }}
                />
              </Link>
            </div>
          </>
        ) : null}
        {/* <div className="flex my-3">
          <p className="text-gray-400 font-bold text-md mr-3">Aadhaar No:</p>
          <p>{aadhaar}</p>
        </div>
        <div className="flex my-3">
          <p className="text-gray-400 font-bold text-md mr-3">
            Current Residence
          </p>
          <p>{currentAddress}</p>
        </div> */}
      </div>
    </div>
  );
};

export default ChildItem;

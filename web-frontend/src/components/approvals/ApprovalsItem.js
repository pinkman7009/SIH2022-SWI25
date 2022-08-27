import React from "react";
import { PrimaryButton } from "../Buttons";
import acceptSvg from "../../assets/accepted.svg";
import denySvg from "../../assets/denied.svg";
import { FaUserAlt } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchGrievances } from "../../store/actions/grievanceAction";

const ApprovalItem = ({ grievance, pending }) => {
  const navigate = useNavigate();
  //   const { _id, name, description, photo, reportId } = grievance;
  //   const navigate = useNavigate();
  //   const dispatch = useDispatch();

  //   const acceptClick = async (e) => {
  //     e.preventDefault();
  //     const headers = {
  //       ContentType: "Application/json",
  //     };

  //     try {
  //       const res = await axios.put(
  //         `${process.env.REACT_APP_API_URL}/report/${reportId}?status=Accepted`,
  //         { headers }
  //       );

  //       navigate(`/childmonitoring/childdetails/${reportId}`);
  //     } catch (error) {
  //       console.log({ error });
  //     }
  //   };

  //   const deniedClick = async (e) => {
  //     e.preventDefault();
  //     const headers = {
  //       ContentType: "Application/json",
  //     };

  //     try {
  //       const res = await axios.put(
  //         `${process.env.REACT_APP_API_URL}/report/${reportId}?status=Denied`,
  //         { headers }
  //       );

  //       // navigate("/childmonitoring/addchild");
  //       dispatch(fetchGrievances());
  //     } catch (error) {
  //       console.log({ error });
  //     }
  //   };

  return (
    <div className="border-2 border-primary shadow-xl rounded-xl p-6 flex justify-between w-full my-6">
      <div className="h-40 w-40 bg-gray-400 p-6 rounded-full flex items-center justify-center">
        <div className="user-svg">
          <FaUserAlt />
        </div>
      </div>

      <div className="border-r-2 border-gray-400 mx-6"></div>
      <div className="w-1/2">
        <div className="flex my-3">
          <p className="text-gray-400 font-bold text-md mr-3">Reporting ID</p>
          <p>454943</p>
        </div>
        <div className="flex my-3">
          <p className="text-gray-400 font-bold text-md mr-3">Name</p>
          <p>Varun</p>
        </div>
        <div className="flex my-3">
          <p className="text-gray-400 font-bold text-md mr-3">Description</p>
          <p>
            Varun is very sad that he cannot attend school. His mental health
            has detoriated and needs immediate attention.
          </p>
        </div>
      </div>
      {pending === true ? (
        <div>
          <button
            className={`transition-all ease-in p-2 w-32
      text-green-500 my-3 text-sm rounded font-bold border-dashed border-2 border-green-500 hover:bg-green-500 hover:text-white flex justify-evenly items-center`}
            // onClick={acceptClick}
          >
            <img src={acceptSvg} alt="accept" className="h-6" />
            Accept
          </button>

          <button
            className={`transition-all ease-in p-2 w-32 text-red-500 my-3 text-sm rounded font-bold border-dashed border-2 border-red-500 hover:bg-red-500 hover:text-white flex justify-evenly items-center`}
            // onClick={deniedClick}
          >
            <img src={denySvg} alt="reject" className="h-6" />
            Reject
          </button>
        </div>
      ) : (
        <div className="my-auto flex flex-col">
          {/* <PrimaryButton
            text="Details"
            handleClick={() => {
              navigate(`/childmonitoring/childdetails/${reportId}`);
            }}
          /> */}
          {/* <PrimaryButton
            text="Register Child"
            handleClick={() =>
              navigate(
                `/childmonitoring/addchild?name=${name}&reportingId=${_id}&photo=${photo}`
              )
            }
          /> */}
        </div>
      )}
      <div>
        <PrimaryButton
          text="Details"
          handleClick={() => {
            navigate(`/approvaldetails`);
          }}
        />
      </div>
    </div>
  );
};

export default ApprovalItem;

import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PrimaryButton } from "../Buttons";
import ChildMonitoring from "./ChildMonitoring";
import { useNavigate } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";

const AddChildForm = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [childName, setChildName] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [reportingId, setReportingId] = useState("");
  const [form, setForm] = useState({
    name: "",
    gender: "",
    FatherName: "",
    MotherName: "",
    dateOfBirth: "",
    Caste: "",
    Religion: "",
    currentAddress: "",
    aadhaar: "",
    // educationalDetails: {
    //   hasEnrolled: "",
    //   schoolTpye: "",
    //   standard: "",
    //   freeDress: "",
    //   document: "",
    // },
    // healthDetails: {
    //   freeCards: "",
    // },
  });

  useEffect(() => {
    const query = new URLSearchParams(location.search);

    const queryName = query.get("name");
    const id = query.get("reportingId");
    const photo = query.get("photo");

    setChildName(queryName);
    setPhotoUrl(photo);
    setReportingId(id);
  }, []);

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const {
    gender,
    FatherName,
    MotherName,
    dateOfBirth,
    Caste,
    Religion,
    currentAddress,
    aadhaar,
  } = form;

  const onSubmit = async (e) => {
    e.preventDefault();
    form.name = childName;
    const headers = {
      ContentType: "Application/json",
    };
    console.log({ form });
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/child`,
        form,
        { headers }
      );

      navigate("/childmonitoring/childdatabase");
    } catch (error) {}
  };

  return (
    <>
      <div className="p-6 border-2 border-primary rounded-md m-6">
        <h3 className="text-[1.5rem]">Add Child Information</h3>
        <div className="border-b-2 border-gray-400 w-1/4"></div>

        <div>
          <p className="text-primary font-bold text-lg mt-3">Reporting ID</p>
          <p className="text-primary">{reportingId}</p>
        </div>

        <div className="flex justify-around items-center w-full mx-auto mt-6">
          <div className=" p-6 rounded-full flex justify-center items-center rounded-full h-32 w-32 bg-gray-400">
            {/* <img src={photoUrl} alt="" className="rounded-full h-32 w-32" /> */}
            <div className="user-svg">
              <FaUserAlt />
            </div>
          </div>
          <div></div>
          <p>Name of Child</p>
          {childName ? (
            <input
              name="name"
              type="text"
              className="rounded-lg shadow-lg p-3 h-12 w-1/5 border-2 border-primary m-6"
              value={childName}
              disabled
            />
          ) : (
            <input
              name="name"
              type="text"
              className="rounded-lg shadow-lg p-3 h-12 w-1/5 border-2 border-primary m-6"
              value={childName}
              onChange={onChange}
            />
          )}

          <p>Gender</p>
          <select
            name="gender"
            className="rounded-lg shadow-lg p-3 h-12 w-1/5 border-2 border-primary m-6 bg-white"
            onChange={onChange}
            value={gender}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <p>Date of Birth</p>
          <input
            name="dateOfBirth"
            type="date"
            className="rounded-lg shadow-lg p-3 h-12 w-1/5 border-2 border-primary m-6"
            placeholder="Date of Birth"
            onChange={onChange}
            value={dateOfBirth}
          />
        </div>

        <div className="grid grid-cols-2 w-3/4 mx-auto">
          <div className="flex items-center justify-between justify-between mr-16">
            <p className="mr-3">Father's Name</p>
            <input
              name="FatherName"
              type="text"
              className="rounded-lg shadow-lg shadow-lg p-3 h-12 w-2/3 border-2 border-primary my-6"
              onChange={onChange}
              value={FatherName}
            />
          </div>
          <div className="flex items-center justify-between mr-16">
            <p className="mr-3">Mother's Name</p>
            <input
              name="MotherName"
              type="text"
              className="rounded-lg shadow-lg p-3 h-12 w-2/3 border-2 border-primary my-6"
              onChange={onChange}
              value={MotherName}
            />
          </div>
          <div className="flex items-center justify-between mr-16">
            <p className="mr-3">Religion</p>
            <input
              name="Religion"
              type="text"
              className="rounded-lg shadow-lg p-3 h-12 w-2/3 border-2 border-primary my-6"
              onChange={onChange}
              value={Religion}
            />
          </div>
          <div className="flex items-center justify-between mr-16">
            <p className="mr-3">Caste</p>
            <input
              name="Caste"
              type="text"
              className="rounded-lg shadow-lg p-3 h-12 w-2/3 border-2 border-primary my-6"
              onChange={onChange}
              value={Caste}
            />
          </div>
          <div className="flex justify-between mr-16 my-6">
            <p className="mr-3">Address</p>
            <textarea
              name="currentAddress"
              className="rounded-lg shadow-lg p-3 h-32 w-2/3 border-2 border-primary"
              value={currentAddress}
              onChange={onChange}
            />
          </div>
          <div className="flex justify-between mr-16 my-6">
            <p className="mr-3">Aadhaar No.</p>
            <input
              name="aadhaar"
              type="text"
              className="rounded-lg shadow-lg p-3 h-12 w-2/3 border-2 border-primary"
              onChange={onChange}
              value={aadhaar}
            />
          </div>
        </div>
      </div>

      {/* <ChildMonitoring /> */}
      <div className="flex justify-center items-center">
        <PrimaryButton text="Submit" handleClick={onSubmit} />
      </div>
    </>
  );
};

export default AddChildForm;

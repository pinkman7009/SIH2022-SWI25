import React from "react";
import ChildItem from "./ChildItem";

const ChildList = () => {
  const children = [
    {
      _id: 1,
      name: "Hardik Srivastava",
      phone: 1234567899,
      aadhaar: "SD09091201239019",
      currentAddress: "32 MG Road, Gujarat, India",
    },
    {
      _id: 2,
      name: "Rohan Sen",
      phone: 1234567899,
      aadhaar: "SD09091201239019",
      currentAddress: "32 MG Road, Gujarat, India",
    },
    {
      _id: 3,
      name: "Rahul Gupta",
      phone: 1234567899,
      aadhaar: "SD09091201239019",
      currentAddress: "32 MG Road, Gujarat, India",
    },
  ];
  return (
    <div className="w-4/5 mx-auto">
      {children.map((item) => (
        <ChildItem key={item._id} child={item} />
      ))}
    </div>
  );
};

export default ChildList;

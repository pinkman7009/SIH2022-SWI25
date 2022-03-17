import React from "react";
import GrievanceItem from "./GrievanceItem";
import mapSvg from "../../assets/map.svg";

const GrievanceList = () => {
  const grievances = [
    {
      _id: 1,
      childName: "Hardik Srivastava",
      description: "This is a boy who was found selling tea at a stall",
    },
    {
      _id: 2,
      childName: "Rohan Sen",
      description: "This is a boy who was found selling tea at a stall",
    },
    {
      _id: 3,
      childName: "Rahul Gupta",
      description: "This is a boy who was found selling tea at a stall",
    },
    {
      _id: 4,
      childName: "Unknown",
      description: "This is a boy who was found selling tea at a stall",
    },
    {
      _id: 5,
      childName: "Nish Gupta",
      description: "This is a boy who was found selling tea at a stall",
    },
  ];
  return (
    <div className="flex justify-center items-start">
      <div className="w-3/5">
        {grievances.map((item) => (
          <GrievanceItem key={item._id} grievance={item} />
        ))}
      </div>
      <img src={mapSvg} alt="map" className="m-16 h-1/2 w-1/4" />
    </div>
  );
};

export default GrievanceList;

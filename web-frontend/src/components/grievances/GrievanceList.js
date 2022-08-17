import React, { useState, useEffect } from "react";
import GrievanceItem from "./GrievanceItem";
import mapSvg from "../../assets/map.svg";

const GrievanceList = ({ grievances, pending }) => {
  return (
    <div className="flex justify-center items-start">
      <div className="w-3/5">
        {grievances?.length > 0 &&
          grievances.map((item) => (
            <GrievanceItem key={item._id} grievance={item} pending={pending} />
          ))}
      </div>
      <img src={mapSvg} alt="map" className="m-16 h-1/2 w-1/4" />
    </div>
  );
};

export default GrievanceList;

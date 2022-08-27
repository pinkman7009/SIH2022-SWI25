import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../store/actions/loginAction";
import { useDispatch, useSelector } from "react-redux";

const TopNavbar = ({ showLogo, isLoggedIn }) => {
  // const gerFullRoleName = (role) => {
  //   switch(role)
  //   {
  //     case STC:
  //       return "Special Training Center"

  //   }
  // }
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const role = useSelector((state) => state.role);

  return (
    <div className="bg-primary w-full h-24 p-3 flex justify-center items-center text-lg text-white relative no-print">
      {showLogo && (
        <div className="flex items-center absolute top-3 left-2">
          <img src="./logo.svg" alt="logo" className="h-16 w-16" />
          <div>
            <p>Ministry of Labour and Employment</p>
            <p>Government of India</p>
          </div>
        </div>
      )}

      <div>
        <h2 className="text-center text-[1.7rem]">PENCiL</h2>
      </div>
      {/* 
      <div>
        Logged in 
      </div> */}

      {isLoggedIn === true ? (
        <Link to="/login">
          <div>
            <p
              className="absolute top-8 right-5"
              onClick={() => {
                dispatch(logout());
                navigate("login");
              }}
            >
              Logout
            </p>
          </div>
        </Link>
      ) : null}
    </div>
  );
};

export default TopNavbar;

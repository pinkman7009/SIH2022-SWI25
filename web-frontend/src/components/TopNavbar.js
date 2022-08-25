import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../store/actions/loginAction";
import { useDispatch } from "react-redux";

const TopNavbar = ({ showLogo, isLoggedIn }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="bg-primary w-full h-24 p-3 flex justify-center items-center text-lg text-white relative">
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
        <h2 className="text-center text-[1.7rem]">PENCIL</h2>
      </div>

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

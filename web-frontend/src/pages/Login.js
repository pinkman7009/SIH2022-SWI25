import React from "react";
import { PrimaryButton } from "../components/Buttons";
import TopNavbar from "../components/TopNavbar";

const Login = ({ setToken }) => {
  return (
    <>
      <TopNavbar showLogo={true} isLoggedIn={false} />
      <div className="bg-secondaryBg min-h-screen w-full flex justify-center items-center">
        <div className="rounded-3xl shadow-md p-6 w-1/4 flex flex-col items-center justify-evenly bg-white h-[500px]">
          <h3 className="text-[2rem]">CLTS Login</h3>
          <div className="mx-auto w-2/3">
            <input
              type="email"
              className="rounded-lg p-3 h-12 w-full border-2 border-primary my-6"
              placeholder="Enter email"
            />
            <input
              type="password"
              className="rounded-lg p-3 h-12 w-full border-2 border-primary mb-6"
              placeholder="Enter password"
            />
          </div>
          <p className="text-primary">Forgot Password?</p>
          <PrimaryButton
            text="Login"
            size="medium"
            handleClick={() => setToken(123)}
          />
        </div>
      </div>
    </>
  );
};

export default Login;

import React, { useState, useEffect } from "react";
import { PrimaryButton } from "../components/Buttons";
import TopNavbar from "../components/TopNavbar";
import { useDispatch } from "react-redux";
import { login } from "../store/actions/loginAction";
import { setRole } from "../store/actions/roleAction";
import { useNavigate } from "react-router-dom";

const ChildLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [roleName, setRoleName] = useState("STC");

  const onSubmit = (e) => {
    navigate("/childpage");
  };

  const handleChange = (e) => {
    setRoleName(e.target.value);
  };

  return (
    <>
      <TopNavbar showLogo={true} isLoggedIn={false} />
      <form action="" onSubmit={onSubmit}>
        <div className="bg-secondaryBg min-h-screen w-full flex justify-center items-center">
          <div className="rounded-3xl shadow-md p-6 w-1/4 flex flex-col items-center justify-evenly bg-white h-[500px]">
            <h3 className="text-[2rem]">Child Login</h3>
            <div className="mx-auto w-2/3">
              <input
                type="text"
                className="rounded-lg p-3 h-12 w-full border-2 border-primary my-6"
                placeholder="Enter Child ID"
              />
              {/* <input
                type="text"
                className="rounded-lg p-3 h-12 w-full border-2 border-primary mb-6"
                placeholder="Enter phone number"
              /> */}
              <input
                type="text"
                placeholder="Password"
                className="p-1 px-3 bg-neutral-200 border-1 border-solid border-primary"
              />
            </div>
            <PrimaryButton text="Login" size="medium" handleClick={onSubmit} />
          </div>
        </div>
      </form>
    </>
  );
};

export default ChildLogin;

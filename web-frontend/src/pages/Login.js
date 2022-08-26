import React, { useState, useEffect } from "react";
import { PrimaryButton } from "../components/Buttons";
import TopNavbar from "../components/TopNavbar";
import { useDispatch } from "react-redux";
import { login } from "../store/actions/loginAction";
import { setRole } from "../store/actions/roleAction";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [roleName, setRoleName] = useState("STC");

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(setRole(roleName));
    dispatch(login(email, password));
  };

  const handleChange = (e) => {
    setRoleName(e.target.value);
  };

  // useEffect(() => {
  //   navigate("/login");
  // }, []);

  return (
    <>
      <TopNavbar showLogo={true} isLoggedIn={false} />
      <form action="" onSubmit={onSubmit}>
        <div className="bg-secondaryBg min-h-screen w-full flex justify-center items-center">
          <div className="rounded-3xl shadow-md p-6 w-1/4 flex flex-col items-center justify-evenly bg-white h-[500px]">
            <h3 className="text-[2rem]">CLTS Login</h3>
            <div className="mx-auto w-2/3">
              <label htmlFor="" className="font-bold my-3">
                Select your role
              </label>
              <select
                id="role"
                className="py-2 px-8 outline-primary my-3"
                onChange={handleChange}
                value={roleName}
              >
                <option value="STC">STC</option>
                <option value="NGO">NGO Baccha Trust</option>
                <option value="DEO">District Education Office</option>
                <option value="URC">UIDAI Regional Center</option>
                <option value="DHO">District Health Office</option>
                <option value="LDO">LIC Development Office</option>
              </select>
              <input
                type="email"
                className="rounded-lg p-3 h-12 w-full border-2 border-primary my-6"
                placeholder="Enter email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <input
                type="password"
                className="rounded-lg p-3 h-12 w-full border-2 border-primary mb-6"
                placeholder="Enter password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <p className="text-primary">Forgot Password?</p>
            <PrimaryButton text="Login" size="medium" handleClick={onSubmit} />
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;

import React, { useState, useEffect } from "react";
import { PrimaryButton } from "../components/Buttons";
import TopNavbar from "../components/TopNavbar";
import { useDispatch } from "react-redux";
import { login } from "../store/actions/loginAction";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  useEffect(() => {
    navigate("/login");
  }, []);

  return (
    <>
      <TopNavbar showLogo={true} isLoggedIn={false} />
      <form action="" onSubmit={onSubmit}>
        <div className="bg-secondaryBg min-h-screen w-full flex justify-center items-center">
          <div className="rounded-3xl shadow-md p-6 w-1/4 flex flex-col items-center justify-evenly bg-white h-[500px]">
            <h3 className="text-[2rem]">CLTS Login</h3>
            <div className="mx-auto w-2/3">
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

import { useEffect, useState } from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Login from "./pages/Login";
import Mainscreen from "./pages/Mainscreen";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import setAuthToken from "./utils/setAuthToken";
import ChildLogin from "./pages/ChildLogin";
import ChildPage from "./pages/ChildPage";

const AuthRoutes = () => {
  const navigate = useNavigate();
  // useEffect(() => {
  //   navigate("login");
  // }, []);
  return (
    <>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/childlogin" element={<ChildLogin />} />
        <Route exact path="/childpage" element={<ChildPage />} />
      </Routes>
    </>
  );
};

function App() {
  // const token = useSelector((state) => state.login.token);

  let token = useSelector((state) => state.login.token);
  const role = useSelector((state) => state.role);

  token = localStorage.getItem("token");

  if (token) setAuthToken(token);

  return (
    <BrowserRouter>
      {token !== null ? <Mainscreen role={role} /> : <AuthRoutes />}
    </BrowserRouter>
  );
}

export default App;

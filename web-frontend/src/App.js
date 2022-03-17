import { useEffect, useState } from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Login from "./pages/Login";
import Mainscreen from "./pages/Mainscreen";
import { useNavigate } from "react-router";
// import { useSelector } from "react-redux";
// import setAuthToken from "./utils/setAuthToken";

const AuthRoutes = ({ setToken }) => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("login");
  }, []);
  return (
    <>
      <Routes>
        <Route exact path="/login" element={<Login setToken={setToken} />} />
      </Routes>
    </>
  );
};

function App() {
  // const state = useSelector((state) => state);

  // if (state.token) setAuthToken(state.token);

  // const token = null;

  const [token, setToken] = useState(null);

  return (
    <BrowserRouter>
      {token !== null ? <Mainscreen /> : <AuthRoutes setToken={setToken} />}
    </BrowserRouter>
  );
}

export default App;

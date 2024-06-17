import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import NotFound404 from "./components/NotFound404";
import Login from "./components/Login";
import CheckOut from "./components/CheckOut";
import Home from "./components/Home";
import { useEffect } from "react";
import { auth } from "./firebase";

import { useAuth } from "./context/GlobalState";
import { useNavigate } from "react-router-dom";

export default function App() {
  const { dispatch } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
        dispatch({
          type: "EMPTY_BASKET",
          basket: [],
        });
        navigate("/");
      }
    });
  }, []);
  return (
    <div className="app">
      <Routes>
        <Route
          path={"/"}
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />
        <Route path={"/login"} element={<Login />} />
        <Route path={"*"} element={<NotFound404 />} />
        <Route
          path={"/checkout"}
          element={
            <>
              <Header />
              <CheckOut />
            </>
          }
        />
      </Routes>
    </div>
  );
}

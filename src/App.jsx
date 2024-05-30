import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import NotFound404 from "./components/NotFound404";
import Login from "./components/Login";
export default function App() {
  return (
    <div className="app">
      <Routes>
        <Route path={"/"} element={<Header />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"*"} element={<NotFound404 />} />
      </Routes>
    </div>
  );
}

import { Link } from "react-router-dom";
import logo from "../images/login-logo.png";
import "./Login.css";
import { useState } from "react";
// import { GlobalState } from "../context/GlobalState";

//firebase
import { auth } from "../firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useAuth } from "../context/GlobalState";

import { useNavigate } from "react-router-dom";

export default function Login() {
  const { user } = useAuth();
  const [creartUserinput, setCreatUserInput] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  //create for new user
  function handleCreateNewAcount(event) {
    event.preventDefault();
    console.log("handleCreateNewAcount");
    createUserWithEmailAndPassword(
      auth,
      creartUserinput.email,
      creartUserinput.password
    ).then((a) => navigate("/"));
  }
  console.log(user);
  return (
    <div className="login">
      <Link to={"/"}>
        <img className="login-logo" src={logo} alt="" />
      </Link>
      <div className="login-container">
        <h1>Sign in</h1>
        <form>
          <h5>Email</h5>
          <input
            type={"email"}
            value={creartUserinput.email}
            onChange={(event) => {
              setCreatUserInput({
                ...creartUserinput,
                email: event.target.value,
              });
              console.log(creartUserinput);
            }}
          ></input>
          <h5>Password</h5>
          <input
            type={"password"}
            value={creartUserinput.password}
            onChange={(event) => {
              setCreatUserInput({
                ...creartUserinput,
                password: event.target.value,
              });
              console.log(creartUserinput);
            }}
          ></input>
          <button className="login-signInBtn" type="submit">
            Sign in
          </button>
          <p>
            By continuing, you agree to Amazon's Fake Clone Conditions of Use
            and Privacy Notice.
          </p>
          <button className="login-registerBtn" onClick={handleCreateNewAcount}>
            {" "}
            Create your Amazon Account
          </button>
        </form>
      </div>
    </div>
  );
}

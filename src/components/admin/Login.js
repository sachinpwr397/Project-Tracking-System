import React, { useState } from "react";
import "./style.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import AuthApi from "./AuthApi";
import logo from "../../login.svg";
const Login = () => {
  const Auth = React.useContext(AuthApi);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setName] = useState("");
  //   const handleOnClick = () => {
  //     Auth.setAuth(true);
  //     Cookies.set("user", "loginTrue");
  //   };
  const login = () => {
    console.warn(email, password);
    const res = axios
      .get(
        "http://localhost:8081/getbyuser?email_id=" + email + "&pwd=" + password
      )
      .then(function (response) {
        let log = response.data;
        console.log(response.data);
        if (log != "") {
          alert("Login Successful: Welcome " + log);
          setCookieFunction(log);
          Auth.setAuth(true);
        } else alert("Invalid Username password");
      });
  };
  const setCookieFunction = (log) => {
    localStorage.setItem("username", log);
  };
  return (
    <div className="App">
      <div className="login">
        <div className="container">
          <div className="base-container">
            <div className="header">Login</div>
            <div className="content">
              <div className="image">
                <img src={logo} alt="" />
              </div>
              <div className="form">
                <div className="form-group">
                  <label htmlFor="email">Email Id</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Id"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="footer">
              <button onClick={login} type="button" className="butn">
                Login
              </button>
              <Link to="/register">
                <button type="button" className="butn margin">
                  Register
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import AuthApi from "./AuthApi";
import "./style.css";
const Navbar = () => {
  const Auth = React.useContext(AuthApi);
  const handleOnClick = () => {
    Auth.setAuth(false);
    Cookies.remove("user");
  };
  return (
    <nav className="navbar navbar-expand-lg navbar bg">
      <Link className="navbar-brand" to="/dashboard">
        Welcome
      </Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/addproject">
              Add Project
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/addemployee">
              Add Employee
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/addmanager">
              Add Manager
            </Link>
          </li>
          <Link className="nav-link" onClick={handleOnClick}>
            Logout
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

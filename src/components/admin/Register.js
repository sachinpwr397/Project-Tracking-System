import React, { Component } from "react";
import "./style.css";
import EmployeeList from "../services/EmployeeList";
import { Link } from "react-router-dom";
import logo from "../../login.svg";
import "bootstrap/dist/css/bootstrap.min.css";
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      contactnumber: "",
      address: "",
      email_id: "",
      username: "",
      password: "",
    };
    this.changeFNameHandler = this.changeFNameHandler.bind(this);
    this.changeLNameHandler = this.changeLNameHandler.bind(this);
    this.changeContactHandler = this.changeContactHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.changeUsernameHandler = this.changeUsernameHandler.bind(this);
    this.changePasswordHandler = this.changePasswordHandler.bind(this);
    this.RsignUp = this.RsignUp.bind(this);
  }
  RsignUp = (e) => {
    e.preventDefault();
    let employee = {
      first_name: this.state.eefname,
      last_name: this.state.eelname,
      contactnumber: this.state.eecontact,
      email_id: this.state.eemail,
      username: this.state.eeusername,
      pwd: this.state.eepassword,
      isManager: "null",
    };
    console.log("employee => " + JSON.stringify(employee));

    EmployeeList.createEmployee(employee).then((res) => {
      this.props.history.push("/register");
    });
  };

  changeFNameHandler = (event) => {
    this.setState({ eefname: event.target.value });
  };
  changeLNameHandler = (event) => {
    this.setState({ eelname: event.target.value });
  };
  changeContactHandler = (event) => {
    this.setState({ eecontact: event.target.value });
  };
  changeEmailHandler = (event) => {
    this.setState({ eemail: event.target.value });
  };
  changeUsernameHandler = (event) => {
    this.setState({ eeusername: event.target.value });
  };
  changePasswordHandler = (event) => {
    this.setState({ eepassword: event.target.value });
  };
  render() {
    return (
      <div className="App">
        <div className="Login">
          <div className="container">
            <div className="base-container">
              <div className="header">Register</div>
              <div className="content">
                <div className="image">
                  <img src={logo} alt="" />
                </div>
                <div className="form">
                  <div className="row">
                    <div className="col">
                      <div className="form-group">
                        <input
                          type="text"
                          name="eefname"
                          placeholder="First name"
                          value={this.state.eefname}
                          onChange={this.changeFNameHandler}
                        />
                      </div>
                    </div>
                    <div className="col">
                      <div className="form-group">
                        <input
                          type="text"
                          name="eelname"
                          placeholder="Last name"
                          value={this.state.eelname}
                          onChange={this.changeLNameHandler}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="form-group">
                        <input
                          type="text"
                          name="eecontact"
                          placeholder="Mobile No"
                          value={this.state.eecontact}
                          onChange={this.changeContactHandler}
                        />
                      </div>
                    </div>
                    <div className="col">
                      <div className="form-group">
                        <input
                          type="text"
                          name="eeusername"
                          placeholder="Username"
                          value={this.state.eeusername}
                          onChange={this.changeUsernameHandler}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="form-group">
                        <input
                          type="email"
                          name="eemail"
                          placeholder="Email"
                          value={this.state.eemail}
                          onChange={this.changeEmailHandler}
                        />
                      </div>
                    </div>
                    <div className="col">
                      <div className="form-group">
                        <input
                          type="password"
                          name="eepassword"
                          placeholder="Password"
                          value={this.state.eepassword}
                          onChange={this.changePasswordHandler}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer">
                <button type="button" className="butn" onClick={this.RsignUp}>
                  Register
                </button>
                <Link to="/login">
                  <button type="button" className="butn margin">
                    Login
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;

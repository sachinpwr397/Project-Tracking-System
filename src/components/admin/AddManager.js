import React, { Component } from "react";
import Navbar from "./Navbar";
import employeeList from "../services/EmployeeList";
import { useHistory } from "react-router-dom";
import "./AddProject.css";
class AddManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employeefname: "",
      employeelname: "",
      employeeaddress: "",
      employeecontact: "",
      employeeemail: "",
      employeeusername: "",
      employeepassword: "",
    };
    this.changeEmployeeFNameHandler = this.changeEmployeeFNameHandler.bind(
      this
    );
    this.changeEmployeeLNameHandler = this.changeEmployeeLNameHandler.bind(
      this
    );
    this.changeEmployeeAddressHandler = this.changeEmployeeAddressHandler.bind(
      this
    );
    this.changeEmployeeContactHandler = this.changeEmployeeContactHandler.bind(
      this
    );
    this.changeEmployeeEmailHandler = this.changeEmployeeEmailHandler.bind(
      this
    );
    this.changeEmployeeUsernameHandler = this.changeEmployeeUsernameHandler.bind(
      this
    );
    this.changeEmployeePasswordHandler = this.changeEmployeePasswordHandler.bind(
      this
    );
    this.addEmployee = this.addEmployee.bind(this);
  }
  addEmployee = (e) => {
    e.preventDefault();
    let employee = {
      first_name: this.state.eefname,
      last_name: this.state.eelname,
      address: this.state.eeaddress,
      contactnumber: this.state.eecontact,
      email_id: this.state.eemail,
      username: this.state.eeusername,
      pwd: this.state.eepassword,
      isManager: "1",
    };
    console.log("employee => " + JSON.stringify(employee));

    employeeList.createEmployee(employee).then((res) => {
      alert("Manager Successfully Added");
      // window.location.reload();
    });
  };
  changeEmployeeFNameHandler = (event) => {
    this.setState({ eefname: event.target.value });
  };
  changeEmployeeLNameHandler = (event) => {
    this.setState({ eelname: event.target.value });
  };
  changeEmployeeAddressHandler = (event) => {
    this.setState({ eeaddress: event.target.value });
  };
  changeEmployeeContactHandler = (event) => {
    this.setState({ eecontact: event.target.value });
  };
  changeEmployeeEmailHandler = (event) => {
    this.setState({ eemail: event.target.value });
  };
  changeEmployeeUsernameHandler = (event) => {
    this.setState({ eeusername: event.target.value });
  };
  changeEmployeePasswordHandler = (event) => {
    this.setState({ eepassword: event.target.value });
  };

  // addExam() {
  //   this.props.history.push("/addExam");
  // }
  // Agar routing work nahi hua toh route path me "/" component ke jagah exact component
  render() {
    return (
      <>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <div className="">
                <h1 className="heading">Add Manager</h1>
                <form className="align-center">
                  <div className="column">
                    <div className="col">
                      <label htmlFor="eefname">First Name: </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter First Name"
                        name="eefname"
                        value={this.state.eefname}
                        onChange={this.changeEmployeeFNameHandler}
                      />
                    </div>
                    <div className="col">
                      <label htmlFor="eelname">Last Name: </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Last Name"
                        name="eelname"
                        value={this.state.eelname}
                        onChange={this.changeEmployeeLNameHandler}
                      />
                    </div>
                    <div className="col">
                      <label htmlFor="eeaddress">Address: </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Address"
                        name="eeaddress"
                        value={this.state.eeaddress}
                        onChange={this.changeEmployeeAddressHandler}
                      />
                    </div>
                    <div className="col">
                      <label htmlFor="eecontact">Contact Number: </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Contact Number"
                        name="eecontact"
                        value={this.state.eecontact}
                        onChange={this.changeEmployeeContactHandler}
                      />
                    </div>
                    <div className="col">
                      <label htmlFor="eemail">Email: </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Email"
                        name="eemail"
                        value={this.state.eemail}
                        onChange={this.changeEmployeeEmailHandler}
                      />
                    </div>
                    <div className="col">
                      <label htmlFor="eeusername">Username: </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Username"
                        name="eeusername"
                        value={this.state.eeusername}
                        onChange={this.changeEmployeeUsernameHandler}
                      />
                    </div>
                    <div className="col">
                      <label htmlFor="eepassword">Password: </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Password"
                        name="eepassword"
                        value={this.state.eepassword}
                        onChange={this.changeEmployeePasswordHandler}
                      />
                    </div>
                  </div>
                </form>
                <div className="col-md-12 text-center">
                  <div className="btn">
                    <button
                      type="submit"
                      className="btn btn-primary btn-top"
                      onClick={this.addEmployee}
                    >
                      Add Manager
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </>
    );
  }
}

export default AddManager;

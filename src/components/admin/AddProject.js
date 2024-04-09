import React, { Component } from "react";
import ProjectList from "../services/ProjectList";
import "./AddProject.css";
import Navbar from "./Navbar";
class AddProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectname: "",
      projectdetail: "",
    };
    this.changeProjectNameHandler = this.changeProjectNameHandler.bind(this);
    this.changeProjectDetailHandler = this.changeProjectDetailHandler.bind(
      this
    );
    this.addProject = this.addProject.bind(this);
  }
  addProject = (e) => {
    e.preventDefault();
    let project = {
      project_title: this.state.epname,
      project_details: this.state.epdetail,
    };
    console.log("project => " + JSON.stringify(project));

    ProjectList.createProject(project).then((res) => {
      alert("Project Successfully Added");
      // this.props.history.push("/addproject");
    });
  };
  changeProjectNameHandler = (event) => {
    this.setState({ epname: event.target.value });
  };
  changeProjectDetailHandler = (event) => {
    this.setState({ epdetail: event.target.value });
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
                <h1 className="heading">Add Project</h1>
                <form className="align-center">
                  <div className="column">
                    <div className="col">
                      <label htmlFor="epname">Project Name: </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Project Name"
                        name="epname"
                        value={this.state.epname}
                        onChange={this.changeProjectNameHandler}
                      />
                    </div>
                    <div className="col">
                      <label htmlFor="epdetail">Project Detail: </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Project Detail"
                        name="epdetail"
                        value={this.state.epdetail}
                        onChange={this.changeProjectDetailHandler}
                      />
                    </div>
                  </div>
                </form>
                <div className="col-md-12 text-center">
                  <div className="btn">
                    <button
                      type="submit"
                      className="btn btn-primary btn-top"
                      onClick={this.addProject}
                    >
                      Save
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

export default AddProject;

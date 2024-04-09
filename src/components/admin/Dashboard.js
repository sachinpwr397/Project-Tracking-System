import React, { Component } from "react";
import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

import ProjectList from "../services/ProjectList";
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: [],
    };
  }
  componentDidMount() {
    ProjectList.getProject().then((res) => {
      this.setState({ project: res.data });
    });
  }
  render() {
    return (
      <>
        <Navbar />
        <h1 className="heading">Project List</h1>

        <div className="container">
          <div className="row">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Projecr ID</th>
                  <th scope="col">Project Name</th>
                </tr>
              </thead>
              <tbody>
                {this.state.project.map((project) => (
                  <tr key={project.id}>
                    <td>{project.project_id}</td>
                    <td>{project.project_title}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}

export default Dashboard;

import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8080/employee";

class EmployeeList {
  createEmployee(signUpData) {
    return axios.post(USER_API_BASE_URL, signUpData);
  }
}

export default new EmployeeList();

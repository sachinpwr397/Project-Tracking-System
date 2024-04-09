import axios from "axios";

const EXAM_API_BASE_URL = "http://localhost:8080/project";

class ProjectList {
  getProject() {
    return axios.get(EXAM_API_BASE_URL);
  }
  createProject(exam) {
    return axios.post(EXAM_API_BASE_URL, exam);
  }
}

export default new ProjectList();

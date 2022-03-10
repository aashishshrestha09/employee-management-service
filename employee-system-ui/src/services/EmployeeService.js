import axios from "axios";

const EMPLOYEEE_BASE_URL =
  window.location.protocol +
  "//" +
  window.location.hostname +
  ":8080/api/employee";

class EmployeeService {
  getAllEmployees() {
    return axios.get(EMPLOYEEE_BASE_URL);
  }

  saveEmployee(employee) {
    return axios.post(EMPLOYEEE_BASE_URL, employee);
  }

  deleteEmployeeById(employeeId) {
    return axios.delete(`${EMPLOYEEE_BASE_URL}/${employeeId}`);
  }

  getEmployee(employeeId) {
    return axios.get(`${EMPLOYEEE_BASE_URL}/${employeeId}`);
  }

  updateEmployee(employeeId, employee) {
    return axios.put(`${EMPLOYEEE_BASE_URL}/${employeeId}`, employee);
  }
}

export default new EmployeeService();

import * as React from "react";

import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { Employee } from "./Employee";
import EmployeeService from "../services/EmployeeService";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Table from "@mui/material/Table";
import Paper from "@mui/material/Paper";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

export function EmployeeList() {
  let navigate = useNavigate();
  const [employees, setEmployees] = React.useState(null);

  React.useEffect(() => {
    const fetchAllEmployee = async () => {
      try {
        const response = await EmployeeService.getAllEmployees();
        setEmployees(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllEmployee();
  }, []);

  const deleteEmployee = (e, id) => {
    e.preventDefault();
    EmployeeService.deleteEmployeeById(id)
      .then((response) => {
        setEmployees(
          employees.filter((employee) => employee.employeeId !== id)
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Button
        sx={{ margin: 2 }}
        variant="contained"
        color="success"
        onClick={() => navigate("/addEmployee")}
      >
        Add Employee
      </Button>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>FIRST NAME</TableCell>
              <TableCell align="left">LAST NAME</TableCell>
              <TableCell align="left">EMAIL ID</TableCell>
              <TableCell align="center">ACTIONS</TableCell>
            </TableRow>
          </TableHead>
          {employees &&
            employees.map((employee) => (
              <Employee
                key={employee.employeeId}
                employee={employee}
                deleteEmployee={deleteEmployee}
              />
            ))}
        </Table>
      </TableContainer>
    </>
  );
}

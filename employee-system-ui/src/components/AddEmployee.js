import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

export function AddEmployee() {
  let navigate = useNavigate();
  const [employee, setEmployee] = React.useState({
    employeeId: "",
    employeeFirstName: "",
    employeeLastName: "",
    employeeEmail: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setEmployee({ ...employee, [e.target.name]: value });
  };

  const addEmployee = () => {
    EmployeeService.saveEmployee(employee)
      .then((response) => {
        console.log(response);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const reset = (e) => {
    e.preventDefault();
    setEmployee({
      employeeId: "",
      employeeFirstName: "",
      employeeLastName: "",
      employeeEmail: "",
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 5,
        "& .MuiTextField-root": { width: "40ch" },
      }}
    >
      <Typography variant="h5" component="h2" sx={{ marginBottom: 2 }}>
        Add New Employee
      </Typography>
      <TextField
        label={"First Name"}
        id="first-name"
        name="employeeFirstName"
        value={employee.employeeFirstName}
        onChange={(e) => handleChange(e)}
      />
      <TextField
        label={"Last Name"}
        id="last-name"
        margin="normal"
        name="employeeLastName"
        value={employee.employeeLastName}
        onChange={(e) => handleChange(e)}
      />
      <TextField
        label={"Email"}
        id="email"
        margin="normal"
        name="employeeEmail"
        value={employee.employeeEmail}
        onChange={(e) => handleChange(e)}
      />
      <Stack direction="row" spacing={2} sx={{ marginTop: 2 }}>
        <Button variant="contained" color="success" onClick={addEmployee}>
          Save
        </Button>
        <Button variant="contained" color="error" onClick={(e) => reset(e)}>
          Clear
        </Button>
      </Stack>
    </Box>
  );
}

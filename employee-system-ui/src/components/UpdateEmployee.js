import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

export function UpdateEmployee() {
  let { id } = useParams();
  let navigate = useNavigate();
  const [employee, setEmployee] = React.useState({
    employeeId: id,
    employeeFirstName: "",
    employeeLastName: "",
    employeeEmail: "",
  });

  React.useEffect(() => {
    const fetchEmployeeById = async () => {
      try {
        const response = await EmployeeService.getEmployee(employee.employeeId);
        setEmployee(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchEmployeeById();
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setEmployee({ ...employee, [e.target.name]: value });
  };

  const updateEmployee = (e) => {
    console.log(employee);
    EmployeeService.updateEmployee(employee.employeeId, employee)
      .then((response) => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
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
        Update Employee
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
        <Button variant="contained" color="success" onClick={updateEmployee}>
          Save
        </Button>
        <Button variant="contained" color="error" onClick={() => navigate("/")}>
          Cancel
        </Button>
      </Stack>
    </Box>
  );
}

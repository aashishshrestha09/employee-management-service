import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export const Employee = ({ employee, deleteEmployee }) => {
  let navigate = useNavigate();

  const updateEmployeeById = (e, id) => {
    navigate(`/updateEmployee/${id}`);
  };

  return (
    <>
      <TableBody>
        <TableRow
          key={employee.employeeId}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
          <TableCell component="th" scope="row">
            {employee.employeeFirstName}
          </TableCell>
          <TableCell align="left">{employee.employeeLastName}</TableCell>
          <TableCell align="left">{employee.employeeEmail}</TableCell>
          <TableCell align="center">
            <Button
              variant="contained"
              sx={{ marginRight: 1 }}
              color="primary"
              onClick={(e, id) => updateEmployeeById(e, employee.employeeId)}
            >
              Edit
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={(e, id) => deleteEmployee(e, employee.employeeId)}
            >
              Delete
            </Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </>
  );
};

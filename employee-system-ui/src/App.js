import "./App.css";
import { Nav } from "./components/Nav";
import { EmployeeList } from "./components/EmployeeList";
import { Routes, Route } from "react-router-dom";
import { AddEmployee } from "./components/AddEmployee";
import { UpdateEmployee } from "./components/UpdateEmployee";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<EmployeeList />} />
        <Route path="/addEmployee" element={<AddEmployee />} />
        <Route path="/updateEmployee/:id" element={<UpdateEmployee />} />
      </Routes>
    </div>
  );
}

export default App;

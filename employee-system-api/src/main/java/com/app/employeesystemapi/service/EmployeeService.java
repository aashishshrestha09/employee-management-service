package com.app.employeesystemapi.service;

import java.util.ArrayList;

import com.app.employeesystemapi.entity.Employee;
import com.app.employeesystemapi.repository.EmployeeRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    public Employee addEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }

    public ArrayList<Employee> getAllEmployee() {
        return (ArrayList<Employee>) employeeRepository.findAll();
    }

    public String deleteEmployee(Long employeeId) {
        Employee employee = employeeRepository.findById(employeeId).get();
        if (employee == null) {
            return employeeId + " not found";
        }
        employeeRepository.deleteById(employeeId);
        return "Employee deleted";
    }

    public Employee getEmployeeById(Long employeeId) {
        return employeeRepository.findById(employeeId).get();
    }

    public Employee updateEmployeeById(Long employeeId, Employee employee) {
        Employee updatedEmployee = employeeRepository.findById(employeeId).get();
        updatedEmployee.setEmployeeFirstName(employee.getEmployeeFirstName());
        updatedEmployee.setEmployeeLastName(employee.getEmployeeLastName());
        updatedEmployee.setEmployeeEmail(employee.getEmployeeEmail());

        employeeRepository.save(updatedEmployee);
        return updatedEmployee;
    }
    
}

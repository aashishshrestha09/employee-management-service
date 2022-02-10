package com.app.employeesystemapi.controller;

import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

import com.app.employeesystemapi.entity.Employee;
import com.app.employeesystemapi.service.EmployeeService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @PostMapping("/employee")
    public Employee addEmployee(@RequestBody Employee employee) {
        return employeeService.addEmployee(employee);
    } 

    @GetMapping("/employee")
    public ArrayList<Employee> getAllEmployee() {
        return employeeService.getAllEmployee();
    }

    @DeleteMapping("/employee/{id}")
    public String deleteEmployee(@PathVariable("id") Long employeeId) {
        return employeeService.deleteEmployee(employeeId);
    }

    @GetMapping("/employee/{id}")
    public Employee getEmployeeById(@PathVariable("id") Long employeeId) {
        return employeeService.getEmployeeById(employeeId);
    }

    @PutMapping("/employee/{id}")
    public Employee updateEmployeeById(@PathVariable("id") Long employeeId, @RequestBody Employee employee) {
        return employeeService.updateEmployeeById(employeeId, employee);
    }

}

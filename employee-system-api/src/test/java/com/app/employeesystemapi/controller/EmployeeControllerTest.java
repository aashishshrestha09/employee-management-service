package com.app.employeesystemapi.controller;

import com.app.employeesystemapi.entity.Employee;
import com.app.employeesystemapi.service.EmployeeService;
import com.fasterxml.jackson.databind.ObjectMapper;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

@WebMvcTest(EmployeeController.class)
public class EmployeeControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private EmployeeService employeeService;

    private Employee employee;

    @BeforeEach
    void setUp() {
        employee = Employee.builder()
                            .employeeFirstName("John")
                            .employeeLastName("Cena")
                            .employeeEmail("cena@gmail.com")
                            .build();
    }

    @Test
    void addEmployee() throws Exception {
        Employee inputEmployee = Employee.builder()
                            .employeeFirstName("John")
                            .employeeLastName("Cena")
                            .employeeEmail("cena@gmail.com")
                            .build();

        Mockito.when(employeeService.addEmployee(inputEmployee))
                .thenReturn(employee);
        mockMvc.perform(MockMvcRequestBuilders.post("/api/employee")
                .contentType(MediaType.APPLICATION_JSON)
                .content(asJsonString(inputEmployee)))
                .andExpect(MockMvcResultMatchers.status().isOk());

    }

    @Test
    void getEmployeeById() throws Exception {
        Mockito.when(employeeService.getEmployeeById(1L))
            .thenReturn(employee);
        mockMvc.perform(MockMvcRequestBuilders.get("/api/employee/1")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.employeeFirstName").value(employee.getEmployeeFirstName()));
    }

    public static String asJsonString(final Object obj) {
        try {
            return new ObjectMapper().writeValueAsString(obj);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
    
}

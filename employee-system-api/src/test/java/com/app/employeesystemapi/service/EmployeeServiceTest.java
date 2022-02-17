package com.app.employeesystemapi.service;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.Optional;

import com.app.employeesystemapi.entity.Employee;
import com.app.employeesystemapi.repository.EmployeeRepository;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

@SpringBootTest
public class EmployeeServiceTest {

    @Autowired
    private EmployeeService employeeService;

    @MockBean
    private EmployeeRepository employeeRepository;

    @BeforeEach
    void setUp() {
        Employee employee = Employee.builder()
                            .employeeFirstName("Aashish")
                            .employeeLastName("Shrestha")
                            .employeeEmail("aashu@gmail.com")
                            .build();
        Mockito.when(employeeRepository.findById(1L))
            .thenReturn(Optional.of(employee));
    }

    @Test
    @DisplayName("Get Data based on Valid Department Id")
    public void whenValidEmployeeId_thenEmployeeShouldFound() {
        Long employeeId = 1L;
        Employee found = employeeService.getEmployeeById(employeeId);

        assertEquals("Aashish", found.getEmployeeFirstName());
		assertEquals("Shrestha", found.getEmployeeLastName());
		assertEquals("aashu@gmail.com", found.getEmployeeEmail());
    }
}

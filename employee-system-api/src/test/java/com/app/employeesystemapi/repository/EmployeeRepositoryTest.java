package com.app.employeesystemapi.repository;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.ArrayList;

import com.app.employeesystemapi.entity.Employee;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;

@DataJpaTest
public class EmployeeRepositoryTest {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
    private TestEntityManager entityManager;

    @BeforeEach
    void setUp() {

		Employee empOne = Employee.builder()
                            .employeeFirstName("Ashmin")
                            .employeeLastName("Shrestha")
                            .employeeEmail("ashmin@gmail.com")
                            .build();
        Employee empTwo = Employee.builder()
                            .employeeFirstName("Honey")
                            .employeeLastName("Shrestha")
                            .employeeEmail("honey@gmail.com")
                            .build();

        entityManager.persist(empOne);
        entityManager.persist(empTwo);

    }


    @Test
    public void whenFindAll_thenReturnAllEmployees() {
        ArrayList<Employee> employees = (ArrayList<Employee>) employeeRepository.findAll();
        assertEquals(employees.size(), 2);

    }

}

package com.example.demo.services;

import java.util.List;

import com.example.demo.entities.Employee;

public interface EmployeeService {
			
	public List<Employee> getEmployees();

	public Employee save(Employee emp);

	
}

package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Employee;
import com.example.demo.repository.EmployeeRepository;

@Service
public class EmployeeServiceImpl{

	@Autowired
	EmployeeRepository employeerepo;
	
	
	public List<Employee> getAll() {
	
		return employeerepo.findAll();
	}

	public Employee save(Employee emp) {
		
		return employeerepo.save(emp);
	}
	public String getByUser(String login, String password){
		return employeerepo.getByUser(login, password);
	}

}

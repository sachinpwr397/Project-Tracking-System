package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Employee;
import com.example.demo.services.EmployeeServiceImpl;
@SuppressWarnings("unused")
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class EmployeeController {
	@Autowired
	EmployeeServiceImpl eservice;

	
	//get Employee
	@GetMapping("/employee")
	public List<Employee> getAll(){
		return eservice.getAll();
		
		
	}
	@PostMapping("/employee")
	public Employee save(@RequestBody Employee emp) {
		return eservice.save(emp);
		
	}
	@GetMapping("/getbyuser")
	public String getByUser(@RequestParam("email_id") String email_id, @RequestParam("pwd") String password){
		return eservice.getByUser(email_id, password);
	}
	
}

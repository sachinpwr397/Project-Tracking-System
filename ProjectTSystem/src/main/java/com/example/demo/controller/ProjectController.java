package com.example.demo.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Project;
import com.example.demo.services.ProjectServiceImpl;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ProjectController {

	@Autowired
	ProjectServiceImpl pservice;
	
	
	
	
	@GetMapping("/project")
	public List<Project> getAll(){
		
	return pservice.getAll();
}

	@PostMapping("/project")	
public Project save(@RequestBody Project pr) {
	return pservice.save(pr);

}
}

package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Project;
import com.example.demo.repository.ProjectRepository;
@Service
public class ProjectServiceImpl {

	@Autowired
	ProjectRepository projectrepo;
	public List<Project> getAll() {
		// TODO Auto-generated method stub
		return projectrepo.findAll();
	}
	

	public Project save(Project pr) {
		// TODO Auto-generated method stub
		return projectrepo.save(pr);
	}

	

}

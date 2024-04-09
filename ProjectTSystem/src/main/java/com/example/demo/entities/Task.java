package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Task")

public class Task {
	@Id
	private int task_id;
	@Column
	private String task_description;
	@Column
	private int emp_id;
	@Column
	private int project_id;
	@Column
	private String deadline;
	@Column
	private String project;
	
	
	public Task() {
		super();
		
	}
	public Task(int task_id, String task_description, int emp_id, String project, String deadline) {
		super();
		this.task_id = task_id;
		this.task_description = task_description;
		this.emp_id = emp_id;
		this.project = project;
		this.deadline = deadline;
	}
	
	
	
	public Task(int task_id, String task_description, int emp_id, int project_id, String deadline) {
		super();
		this.task_id = task_id;
		this.task_description = task_description;
		this.emp_id = emp_id;
		this.project_id = project_id;
		this.deadline = deadline;
	}
	public int getTask_id() {
		return task_id;
	}
	public void setTask_id(int task_id) {
		this.task_id = task_id;
	}
	public String getTask_description() {
		return task_description;
	}
	public void setTask_description(String task_description) {
		this.task_description = task_description;
	}
	public int getEmp_id() {
		return emp_id;
	}
	public void setEmp_id(int emp_id) {
		this.emp_id = emp_id;
	}
	public int getProject_id() {
		return project_id;
	}
	public void setProject_id(int project_id) {
		this.project_id = project_id;
	}
	public String getDeadline() {
		return deadline;
	}
	public void setDeadline(String deadline) {
		this.deadline = deadline;
	}
	public String getProject() {
		return project;
	}
	public void setProject(String project) {
		this.project = project;
	}
	

}

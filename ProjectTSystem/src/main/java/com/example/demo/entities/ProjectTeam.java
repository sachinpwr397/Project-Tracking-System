package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="ProjectTeam")
public class ProjectTeam
{
@Id
	private int project_id;
@Column
private int emp_id;
@Column
private String start_date;
@Column
private String release_date;
	
	public ProjectTeam() 
	{
		super();
	}

	public ProjectTeam(int project_id, int emp_id, String start_date, String release_date) {
		super();
		this.project_id = project_id;
		this.emp_id = emp_id;
		this.start_date = start_date;
		this.release_date = release_date;
	}

	public int getProject_id() {
		return project_id;
	}

	public void setProject_id(int project_id) {
		this.project_id = project_id;
	}

	public int getEmp_id() {
		return emp_id;
	}

	public void setEmp_id(int emp_id) {
		this.emp_id = emp_id;
	}

	public String getStart_date() {
		return start_date;
	}

	public void setStart_date(String start_date) {
		this.start_date = start_date;
	}

	public String getRelease_date() {
		return release_date;
	}

	public void setRelease_date(String release_date) {
		this.release_date = release_date;
	}
}

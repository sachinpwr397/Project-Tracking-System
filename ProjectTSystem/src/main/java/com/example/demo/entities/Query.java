	package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
	@Table(name="Query")

	public class Query {
	@Id
	   private int query_id;
	@Column
	   private int emp_id;
	@Column
	   private String emp_name;
	@Column
	   private int mgr_id;
	@Column 
	private String query_description;
	@Column
	   private String solution;
	@Column
	   private String status;
	@Column   
	private String name;
	   
	public Query() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Query(int query_id, String emp_name, String query_description, String solution, String status) {
		super();
		this.query_id = query_id;
		this.emp_name= emp_name;
		this.query_description = query_description;
		this.solution = solution;
		this.status = status;
	}




	public Query(int query_id, int emp_id, int mgr_id, String query_description, String solution, String status) {
	super();
	this.query_id = query_id;
	this.emp_id = emp_id;
	this.mgr_id = mgr_id;
	this.query_description = query_description;
	this.solution = solution;
	this.status = status;
	}

	public Query(int query_id, int emp_id, int mgr_id, String query_description, String solution, String status, String name) {
	super();
	this.query_id = query_id;
	this.emp_id = emp_id;
	this.mgr_id = mgr_id;
	this.query_description = query_description;
	this.solution = solution;
	this.status = status;
	this.name = name;
	}
	public int getQuery_id() {
		return query_id;
	}
	public void setQuery_id(int query_id) {
		this.query_id = query_id;
	}
	public int getEmp_id() {
		return emp_id;
	}
	public void setEmp_id(int emp_id) {
		this.emp_id = emp_id;
	}
	public String getEmp_name() {
		return emp_name;
	}
	public void setEmp_name(String emp_name) {
		this.emp_name = emp_name;
	}
	public int getMgr_id() {
		return mgr_id;
	}
	public void setMgr_id(int mgr_id) {
		this.mgr_id = mgr_id;
	}
	public String getQuery_description() {
		return query_description;
	}
	public void setQuery_description(String query_description) {
		this.query_description = query_description;
	}
	public String getSolution() {
		return solution;
	}
	public void setSolution(String solution) {
		this.solution = solution;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}

   
}
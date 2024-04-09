package com.example.demo.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name="project")
public class Project 
{
	@Id
 int project_id;
	@Column
 String project_title;
	@Column
 String client_name;
	@Column
 String client_contact_number;
	@Column
 String project_details;
	@Column
 int mgr_id;
	@JsonFormat(pattern = "yyyy-MM-dd")
	@Column
 Date start_date;
	@JsonFormat(pattern = "yyyy-MM-dd")
	@Column
	Date end_date;
	@Column
 String status;
 public Project() {
	super();
	// TODO Auto-generated constructor stub
}
public Project(int project_id, String project_title, String client_name, String client_contact_number,
		String project_details, int mgr_id, Date start_date, Date end_date, String status) {
	super();
	this.project_id = project_id;
	this.project_title = project_title;
	this.client_name = client_name;
	this.client_contact_number = client_contact_number;
	this.project_details = project_details;
	this.mgr_id = mgr_id;
	this.start_date = start_date;
	this.end_date = end_date;
	this.status = status;
}
public int getProject_id() {
	return project_id;
}
public void setProject_id(int project_id) {
	this.project_id = project_id;
}
public String getProject_title() {
	return project_title;
}
public void setProject_title(String project_title) {
	this.project_title = project_title;
}
public String getClient_name() {
	return client_name;
}
public void setClient_name(String client_name) {
	this.client_name = client_name;
}
public String getClient_contact_number() {
	return client_contact_number;
}
public void setClient_contact_number(String client_contact_number) {
	this.client_contact_number = client_contact_number;
}
public String getProject_details() {
	return project_details;
}
public void setProject_details(String project_details) {
	this.project_details = project_details;
}
public int getMgr_id() {
	return mgr_id;
}
public void setMgr_id(int mgr_id) {
	this.mgr_id = mgr_id;
}
public Date getStart_date() {
	return start_date;
}
public void setStart_date(Date start_date) {
	this.start_date = start_date;
}
public Date getEnd_date() {
	return end_date;
}
public void setEnd_date(Date end_date) {
	this.end_date = end_date;
}
public String getStatus() {
	return status;
}
public void setStatus(String status) {
	this.status = status;
}

 
	
}
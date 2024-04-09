package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="employee")
public class Employee {
	@Id
	@Column
	int emp_id;
	@Column
	String first_name;
	@Column
	String last_name;
	@Column
	String address;
	@Column
	String contactnumber;
	@Column
	String email_id;
	@Column
	String mgr_id;
	@Column
	String specialization;
	@Column
	String username;
	@Column
	String pwd;
	@Column
	String available;
	@Column
	String isManager;
	public Employee() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Employee(int emp_id, String first_name, String last_name, String address, String contactnumber,
			String email_id, String mgr_id, String specialization, String username, String pwd, String available,
			String isManager) {
		super();
		this.emp_id = emp_id;
		this.first_name = first_name;
		this.last_name = last_name;
		this.address = address;
		this.contactnumber = contactnumber;
		this.email_id = email_id;
		this.mgr_id = mgr_id;
		this.specialization = specialization;
		this.username = username;
		this.pwd = pwd;
		this.available = available;
		this.isManager = isManager;
	}
	public String getFirst_name() {
		return first_name;
	}
	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}
	public String getLast_name() {
		return last_name;
	}
	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getContactnumber() {
		return contactnumber;
	}
	public void setContactnumber(String contactnumber) {
		this.contactnumber = contactnumber;
	}
	public String getEmail_id() {
		return email_id;
	}
	public void setEmail_id(String email_id) {
		this.email_id = email_id;
	}
	public String getMgr_id() {
		return mgr_id;
	}
	public void setMgr_id(String mgr_id) {
		this.mgr_id = mgr_id;
	}
	public String getSpecialization() {
		return specialization;
	}
	public void setSpecialization(String specialization) {
		this.specialization = specialization;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPwd() {
		return pwd;
	}
	public void setPwd(String pwd) {
		this.pwd = pwd;
	}
	public String getAvailable() {
		return available;
	}
	public void setAvailable(String available) {
		this.available = available;
	}
	public String getIsManager() {
		return isManager;
	}
	public void setIsManager(String isManager) {
		this.isManager = isManager;
	}
	
}
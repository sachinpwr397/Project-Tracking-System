package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="TaskStatus")
public class TaskStatus {
    @Id
	private int emp_id;
    @Column
    private  String track_date;
    @Column
    private int task_id;
    @Column
    private int mgr_id;
    @Column
    private String comment;
    @Column
    private String status;
    @Column
    private String emp_name;
    
    public TaskStatus() {
		super();
		
	}

    public TaskStatus(String emp_name, String track_date, int task_id, String comment, String status) {
		super();
		this.emp_name=emp_name;
		this.track_date = track_date;
		this.task_id = task_id;
		this.comment = comment;
		this.status = status;
	}
    
    
	public TaskStatus(int emp_id, String track_date, int task_id, int mgr_id, String comment, String status) {
		super();
		this.emp_id = emp_id;
		this.track_date = track_date;
		this.task_id = task_id;
		this.mgr_id = mgr_id;
		this.comment = comment;
		this.status = status;
	}

	public int getEmp_id() {
		return emp_id;
	}

	public void setEmp_id(int emp_id) {
		this.emp_id = emp_id;
	}

	public String getTrack_date() {
		return track_date;
	}

	public void setTrack_date(String track_date) {
		this.track_date = track_date;
	}

	public int getTask_id() {
		return task_id;
	}

	public void setTask_id(int task_id) {
		this.task_id = task_id;
	}

	public int getMgr_id() {
		return mgr_id;
	}

	public void setMgr_id(int mgr_id) {
		this.mgr_id = mgr_id;
	}

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getEmp_name() {
		return emp_name;
	}

	public void setEmp_name(String emp_name) {
		this.emp_name = emp_name;
	}

	
    
}
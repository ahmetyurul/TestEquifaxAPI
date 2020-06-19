package com.equifax.pojos;

public class Customer {
	
    private String name;
    private String last;
    private int age;
    private int id;
    private String gender;
    

	public Customer(String name, String last, int age, int id, String gender) {
	
		this.name = name;
		this.last = last;
		this.age = age;
		this.id = id;
		this.gender = gender;
	}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getLast() {
		return last;
	}
	public void setLast(String last) {
		this.last = last;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}


}
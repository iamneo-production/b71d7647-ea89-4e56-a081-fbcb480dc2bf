package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter

public class Cprofile {
	 @Id
	    @GeneratedValue
	    private Long id;
	private String name;
	private String Email;
	private long phone;
	private String Qualification;
	private String Address;
	private String Designation;

}

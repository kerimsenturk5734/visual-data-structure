package com.kerimsenturk.visualdatastruct;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = { SecurityAutoConfiguration.class })
public class VisualdatastructApplication {

	public static void main(String[] args) {
		SpringApplication.run(VisualdatastructApplication.class, args);
	}

}

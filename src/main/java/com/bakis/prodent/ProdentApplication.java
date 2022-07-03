package com.bakis.prodent;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ProdentApplication {

	private static final Logger logger = LoggerFactory.getLogger(ProdentApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(ProdentApplication.class, args);
		logger.info("ProdentApplication started");
	}

}

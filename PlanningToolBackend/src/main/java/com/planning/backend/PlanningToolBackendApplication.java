package com.planning.backend;

import com.planning.backend.entity.Person;
import com.planning.backend.intf.PersonRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.stream.Stream;

@SpringBootApplication
public class PlanningToolBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(PlanningToolBackendApplication.class, args);
	}

	@Bean
	CommandLineRunner init(PersonRepository personRepository) {
		return args -> {
			Stream.of("John", "Julie", "Jennifer", "Helen", "Rachel").forEach(name -> {
				Person person = new Person(name, name.toLowerCase() + "@domain.com", 0.8);
				personRepository.save(person);
			});
			personRepository.findAll().forEach(System.out::println);
		};
	}

}

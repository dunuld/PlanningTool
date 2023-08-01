package com.planning.backend.controller;

import com.planning.backend.entity.Person;
import com.planning.backend.intf.PersonRepository;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@AllArgsConstructor
public class PersonController {

    private final PersonRepository personRepository;

    @GetMapping("/users")
    public List<Person> getPersons() {
        return (List<Person>) personRepository.findAll();
    }

    @PostMapping("/users")
    void addPerson(@RequestBody Person person) {
        personRepository.save(person);
    }
}
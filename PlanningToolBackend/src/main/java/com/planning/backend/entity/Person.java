package com.planning.backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.ToString;

@Entity
@ToString
public class Person {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Getter
    private String name;
    @Getter
    private String email;
    @Getter
    private double capacity;

    public Person() {}

    public Person(String name, String email, double capacity) {
        this.name = name;
        this.email = email;
        this.capacity = capacity;
    }
}

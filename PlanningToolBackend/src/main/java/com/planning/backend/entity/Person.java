package com.planning.backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@NoArgsConstructor(force = true)
@ToString
public class Person {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    @Getter
    private final String name;
    @Getter
    private final String email;
    @Getter
    private final double capacity;

    public Person(String name, String email, double capacity) {
        this.name = name;
        this.email = email;
        this.capacity = capacity;
    }
}

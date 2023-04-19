package com.kerimsenturk.visualdatastruct.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Table(name = "users")
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "uid")
    private int uid;

    @Column(name = "user_name",nullable = false, length = 50)
    private String name;

    @Column(name = "user_surname",nullable = false,length = 50)
    private String surname;

    @Column(name = "user_mail",nullable = false,length = 50)
    private String mail;

    @Column(name = "user_password",nullable = false)
    private String password;

}

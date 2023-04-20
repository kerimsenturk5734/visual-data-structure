package com.kerimsenturk.visualdatastruct.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Table(name = "results")
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor

public class Result {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "result",nullable = false)//value=(1-5)
    private int result;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name ="user_id")
    private User user;


    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name ="course_id",referencedColumnName = "id")
    private Course course;
}

package com.kerimsenturk.visualdatastruct.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Table(name = "questions")
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @Column(name = "question_description",nullable = false,length = 1028)
    private String description;
    @Column(name = "question_image")
    private Byte[] image;
    @OneToMany(mappedBy = "question")
    private List<Choice> choices;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "course_id")
    private Course course;

}

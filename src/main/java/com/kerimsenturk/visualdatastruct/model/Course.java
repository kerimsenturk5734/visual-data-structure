package com.kerimsenturk.visualdatastruct.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


import javax.persistence.*;
import java.util.List;

@Table(name = "courses")
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @Column(name = "course_name",nullable = false,length = 50)
    private String name;
    @Column(name = "course_html_path",length = 512)
    private String path;
    @OneToMany(mappedBy = "course")
    private List<Question> questions;

    @JsonIgnore
    @OneToMany(mappedBy = "course")
    private List<Result> result;
}

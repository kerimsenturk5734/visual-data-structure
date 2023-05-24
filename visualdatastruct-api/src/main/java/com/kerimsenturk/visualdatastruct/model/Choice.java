package com.kerimsenturk.visualdatastruct.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Table(name = "choices")
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Choice {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @Column(name = "choice_description",nullable = false,length = 50)
    private String description;

    @JsonProperty("isAnswer")
    @Column(name = "is_answer",nullable = false)
    private boolean isAnswer;

    @JsonIgnore()
    @ManyToOne()
    @JoinColumn(name = "question_id")
    private Question question;
}

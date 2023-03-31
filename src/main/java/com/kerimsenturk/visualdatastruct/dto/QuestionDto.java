package com.kerimsenturk.visualdatastruct.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class QuestionDto {
    private int id;
    private String description;
    private Byte[] image;
    private List<ChoiceDto> choices;
    private CourseDto course;

}

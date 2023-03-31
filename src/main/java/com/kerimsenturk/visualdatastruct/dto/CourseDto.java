package com.kerimsenturk.visualdatastruct.dto;

import com.kerimsenturk.visualdatastruct.model.Question;
import com.kerimsenturk.visualdatastruct.model.Result;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CourseDto {
    private int id;
    private String name;
    private String path;
    private List<QuestionDto> questions;
    private ResultDto result;
}

package com.kerimsenturk.visualdatastruct.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CourseDto {
    private int id;
    private String name;
    private String path;
    private List<QuestionDto> questions;
    private List<ResultDto> result;
}

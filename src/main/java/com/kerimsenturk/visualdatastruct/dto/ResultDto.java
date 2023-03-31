package com.kerimsenturk.visualdatastruct.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ResultDto {
    private int id;
    private int result;
    private UserDto user;
    private CourseDto course;
}

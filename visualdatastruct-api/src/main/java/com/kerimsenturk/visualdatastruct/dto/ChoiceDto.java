package com.kerimsenturk.visualdatastruct.dto;

import com.kerimsenturk.visualdatastruct.model.Question;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ChoiceDto {
    private int id;
    private String description;
    private boolean isAnswer;
    private QuestionDto question;
}

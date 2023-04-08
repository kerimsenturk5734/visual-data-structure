package com.kerimsenturk.visualdatastruct.dto.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CreateChoiceRequest {
    private String description;
    private boolean isAnswer;
}

package com.kerimsenturk.visualdatastruct.dto.request;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CreateQuestionRequest {
    private String description;
    private Byte[] image;
    private int level;
    private List<CreateChoiceRequest> choices;
}

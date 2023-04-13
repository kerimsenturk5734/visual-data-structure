package com.kerimsenturk.visualdatastruct.dto.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CreateResultRequest {
    private int result;
    private int userId;
    private int courseId;
}

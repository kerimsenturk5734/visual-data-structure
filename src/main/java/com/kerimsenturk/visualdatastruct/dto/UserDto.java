package com.kerimsenturk.visualdatastruct.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDto {
    private int uid;
    private String name;
    private String surname;
    private String mail;
    private String password;
}

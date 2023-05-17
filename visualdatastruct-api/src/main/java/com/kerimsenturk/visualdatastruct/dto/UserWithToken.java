package com.kerimsenturk.visualdatastruct.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.token.Token;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserWithToken {
    private int uid;
    private String name;
    private String surname;
    private String mail;
    private Token token;
}

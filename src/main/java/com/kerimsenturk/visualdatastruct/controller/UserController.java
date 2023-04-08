package com.kerimsenturk.visualdatastruct.controller;

import com.kerimsenturk.visualdatastruct.dto.request.RegisterUserDto;
import com.kerimsenturk.visualdatastruct.model.Result;
import com.kerimsenturk.visualdatastruct.model.User;
import com.kerimsenturk.visualdatastruct.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.net.http.HttpResponse;

@RestController
@RequestMapping("/v1/api/users/")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/")
    public ResponseEntity<?> register(RegisterUserDto registerUserDto) {
        return userService.save(registerUserDto);
    }
}

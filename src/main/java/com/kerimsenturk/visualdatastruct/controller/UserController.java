package com.kerimsenturk.visualdatastruct.controller;

import com.kerimsenturk.visualdatastruct.dto.request.LoginUserRequest;
import com.kerimsenturk.visualdatastruct.dto.request.RegisterUserRequest;
import com.kerimsenturk.visualdatastruct.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/v1/api/users")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/{uid}")
    public ResponseEntity<?> getByUID(@PathVariable(name = "uid") int uid){
        return ResponseEntity.of(Optional.of(userService.getByUID(uid)));
    }

    @GetMapping("/login")
    public ResponseEntity<?> loginCheck(LoginUserRequest loginUserRequest){
        return ResponseEntity.of(userService.loginCheck(loginUserRequest));
    }
    @PostMapping("/")
    public ResponseEntity<?> register(RegisterUserRequest registerUserRequest) {
        return ResponseEntity.status(userService.register(registerUserRequest)).build();
    }
}

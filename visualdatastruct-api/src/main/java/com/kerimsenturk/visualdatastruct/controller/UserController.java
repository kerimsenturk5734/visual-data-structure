package com.kerimsenturk.visualdatastruct.controller;

import com.kerimsenturk.visualdatastruct.auth.TokenManager;
import com.kerimsenturk.visualdatastruct.dto.request.LoginUserRequest;
import com.kerimsenturk.visualdatastruct.dto.request.RegisterUserRequest;
import com.kerimsenturk.visualdatastruct.service.UserService;
import com.kerimsenturk.visualdatastruct.utilities.results.ErrorResult;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/v1/api/users")
@CrossOrigin
public class UserController {
    private final UserService userService;
    private final AuthenticationManager authManager;
    private final TokenManager tokenManager;

    public UserController(UserService userService, AuthenticationManager authManager, TokenManager tokenManager) {
        this.userService = userService;
        this.authManager = authManager;
        this.tokenManager = tokenManager;
    }

    @GetMapping("/{uid}")
    public ResponseEntity<?> getByUID(@PathVariable(name = "uid") int uid){
        return ResponseEntity.of(Optional.of(userService.getByUID(uid)));
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginUserRequest loginUserRequest){
        try {
            authManager.authenticate(
                    new UsernamePasswordAuthenticationToken(loginUserRequest.getMail(),loginUserRequest.getPassword()));

            return ResponseEntity.ok(tokenManager.generate(loginUserRequest.getMail()));
        }
        catch (Exception e){
            System.out.println(e.getMessage()+" for " +loginUserRequest.getMail());
            return ResponseEntity.ok(Optional.of(new ErrorResult("Geçersiz kullanıcı adı veya şifre")));
        }
    }
    @PostMapping("/register")
    public ResponseEntity<?> register(RegisterUserRequest registerUserRequest) {
        return ResponseEntity.status(userService.register(registerUserRequest)).build();
    }
}

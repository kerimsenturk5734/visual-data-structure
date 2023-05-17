package com.kerimsenturk.visualdatastruct.controller;

import com.kerimsenturk.visualdatastruct.auth.TokenManager;
import com.kerimsenturk.visualdatastruct.dto.UserWithToken;
import com.kerimsenturk.visualdatastruct.dto.request.LoginUserRequest;
import com.kerimsenturk.visualdatastruct.dto.request.RegisterUserRequest;
import com.kerimsenturk.visualdatastruct.model.User;
import com.kerimsenturk.visualdatastruct.service.UserService;
import com.kerimsenturk.visualdatastruct.utilities.results.ErrorResult;
import com.kerimsenturk.visualdatastruct.utilities.results.SuccessDataResult;
import com.kerimsenturk.visualdatastruct.utilities.results.SuccessResult;
import org.springframework.http.HttpStatus;
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

            User user = userService.getByMail(loginUserRequest.getMail());

            UserWithToken userWithToken= new UserWithToken(
                    user.getUid(),
                    user.getName(),
                    user.getSurname(),
                    user.getMail(), tokenManager.generate(user.getMail()));

            return ResponseEntity
                    .status(HttpStatus.ACCEPTED)
                    .body(new SuccessDataResult<>(userWithToken, "Giriş Başarılı"));
        }
        catch (Exception e){
            System.out.println(e.getMessage()+" for " +loginUserRequest.getMail());
            return ResponseEntity.ok(Optional.of(new ErrorResult("Geçersiz kullanıcı adı veya şifre")));
        }
    }
    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterUserRequest registerUserRequest) {
        HttpStatus httpStatus=userService.register((registerUserRequest));
        if(httpStatus.is2xxSuccessful()){
            return ResponseEntity.ok(new SuccessResult("Kayıt Başarılı."));
        }
        else if(httpStatus.equals(HttpStatus.CONFLICT)){
            return ResponseEntity.status(httpStatus).body(new ErrorResult("Bu mail zaten kullanımda."));
        }

        return ResponseEntity.status(httpStatus).build();
    }

    @PostMapping("/validate")
    public ResponseEntity<?> isTokenValid(@RequestBody String token) {
        System.out.println(token);
       try{
           return ResponseEntity.ok(tokenManager.validate(token));
       }
       catch(Exception e){
           System.out.println(e.getMessage());
           return ResponseEntity.ok(false);
       }
    }
}

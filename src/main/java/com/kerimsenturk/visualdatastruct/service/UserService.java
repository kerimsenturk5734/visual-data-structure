package com.kerimsenturk.visualdatastruct.service;

import com.kerimsenturk.visualdatastruct.dto.UserDto;
import com.kerimsenturk.visualdatastruct.dto.converter.UserDtoConverter;
import com.kerimsenturk.visualdatastruct.dto.request.LoginUserRequest;
import com.kerimsenturk.visualdatastruct.dto.request.RegisterUserRequest;
import com.kerimsenturk.visualdatastruct.model.User;
import com.kerimsenturk.visualdatastruct.repository.UserRepository;
import com.kerimsenturk.visualdatastruct.utilities.results.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service
public class UserService {
    private final UserRepository userRepository;
    private final UserDtoConverter userDtoConverter;
    public UserService(UserRepository userRepository, UserDtoConverter userDtoConverter) {
        this.userRepository = userRepository;
        this.userDtoConverter = userDtoConverter;
    }
    public ResponseEntity<UserDto> getByUID(int uid){
        Optional<User> userOptional=userRepository.findById(uid);
        if(userOptional.isPresent()){
            UserDto userDto=userDtoConverter.convert(userOptional.get());
            return ResponseEntity.of(Optional.of(userDto));
        }

        return ResponseEntity.notFound().build();
    }
    public ResponseEntity<UserDto> register(RegisterUserRequest registerUserRequest){
        if(!isUserAlreadyRegistered(registerUserRequest)){
            User user=new User(
                    0,
                    registerUserRequest.getName(),
                    registerUserRequest.getSurname(),
                    registerUserRequest.getMail(),
                    registerUserRequest.getPassword());

            UserDto userDto=userDtoConverter.convert(userRepository.save(user));
            return ResponseEntity.of(Optional.of(userDto));
        }

        return ResponseEntity.status(HttpStatus.CONFLICT).build();
    }

    private boolean isUserAlreadyRegistered(RegisterUserRequest registerUserRequest){
      return !(userRepository.getTopByMail(registerUserRequest.getMail())==null);
    }

    public ResponseEntity<Result> loginCheck(LoginUserRequest loginUserRequest){
        User user=userRepository.getTopByMail(loginUserRequest.getMail());
        if(user!=null){
            if(user.getPassword().equals(loginUserRequest.getPassword())){
                //Mail şifre doğru
                return ResponseEntity.ok(new SuccessResult("Giriş başarılı"));
            }
            else{
                return ResponseEntity.ok(new ErrorResult("Mail veya şifre hatalı"));
            }
        }

        return ResponseEntity.notFound().build();
    }
}

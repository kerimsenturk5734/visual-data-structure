package com.kerimsenturk.visualdatastruct.service;

import com.kerimsenturk.visualdatastruct.dto.request.RegisterUserDto;
import com.kerimsenturk.visualdatastruct.model.User;
import com.kerimsenturk.visualdatastruct.repository.UserRepository;
import com.kerimsenturk.visualdatastruct.utilities.results.DataResult;
import com.kerimsenturk.visualdatastruct.utilities.results.ErrorDataResult;
import com.kerimsenturk.visualdatastruct.utilities.results.Result;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public ResponseEntity<Result> save(RegisterUserDto registerUserDto){
        if(!isUserAlreadyRegistered(registerUserDto)){
            User user=new User(
                    0,
                    registerUserDto.getName(),
                    registerUserDto.getSurname(),
                    registerUserDto.getMail(),
                    registerUserDto.getPassword());

            return ResponseEntity.ok(new DataResult<>(userRepository.save(user), true,"Kullanıcı kaydı başarılı"));
        }

        return ResponseEntity.ok(new ErrorDataResult<>("Bu mail ile zaten kayıtlı bir kullanıcı var."));
    }

    private boolean isUserAlreadyRegistered(RegisterUserDto registerUserDto){
      return !(userRepository.getTopByMail(registerUserDto.getMail())==null);
    }
}

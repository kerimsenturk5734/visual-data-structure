package com.kerimsenturk.visualdatastruct.service;

import com.kerimsenturk.visualdatastruct.dto.request.LoginUserRequest;
import com.kerimsenturk.visualdatastruct.dto.request.RegisterUserRequest;
import com.kerimsenturk.visualdatastruct.model.User;
import com.kerimsenturk.visualdatastruct.repository.UserRepository;
import com.kerimsenturk.visualdatastruct.utilities.results.*;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service
public class UserService {
    private final UserRepository userRepository;
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    public User getByUID(int uid){
        Optional<User> userOptional=userRepository.findById(uid);
        return userOptional.orElseThrow();

    }
    public HttpStatus register(RegisterUserRequest registerUserRequest){
        if(!isUserAlreadyRegistered(registerUserRequest)){
            User user=new User(
                    0,
                    registerUserRequest.getName(),
                    registerUserRequest.getSurname(),
                    registerUserRequest.getMail(),
                    registerUserRequest.getPassword());

            userRepository.save(user);
            return HttpStatus.CREATED;
        }

        return HttpStatus.CONFLICT;
    }

    private boolean isUserAlreadyRegistered(RegisterUserRequest registerUserRequest){
      return !(userRepository.getTopByMail(registerUserRequest.getMail())==null);
    }

    public Optional<com.kerimsenturk.visualdatastruct.utilities.results.Result> loginCheck(LoginUserRequest loginUserRequest){
        User user=userRepository.getTopByMail(loginUserRequest.getMail());
        if(user!=null){
            if(user.getPassword().equals(loginUserRequest.getPassword())){
                //Mail şifre doğru
                return Optional.of(new SuccessResult("Giriş başarılı"));
            }
            else{
                return Optional.of(new ErrorResult("Giriş başarısız"));
            }
        }

        return Optional.empty();
    }
}

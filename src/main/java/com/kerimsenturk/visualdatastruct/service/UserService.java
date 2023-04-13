package com.kerimsenturk.visualdatastruct.service;

import com.kerimsenturk.visualdatastruct.dto.UserDto;
import com.kerimsenturk.visualdatastruct.dto.converter.UserDtoConverter;
import com.kerimsenturk.visualdatastruct.dto.request.LoginUserRequest;
import com.kerimsenturk.visualdatastruct.dto.request.RegisterUserRequest;
import com.kerimsenturk.visualdatastruct.model.User;
import com.kerimsenturk.visualdatastruct.repository.UserRepository;
import com.kerimsenturk.visualdatastruct.utilities.results.*;
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
    public Optional<UserDto> getByUID(int uid){
        Optional<User> userOptional=userRepository.findById(uid);
        if(userOptional.isPresent()){
            UserDto userDto=userDtoConverter.convert(userOptional.get());
            return Optional.of(userDto);
        }

        return Optional.empty();
    }
    public Optional<UserDto> register(RegisterUserRequest registerUserRequest){
        if(!isUserAlreadyRegistered(registerUserRequest)){
            User user=new User(
                    0,
                    registerUserRequest.getName(),
                    registerUserRequest.getSurname(),
                    registerUserRequest.getMail(),
                    registerUserRequest.getPassword());

            UserDto userDto=userDtoConverter.convert(userRepository.save(user));
            return Optional.of(userDto);
        }

        return Optional.empty();
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

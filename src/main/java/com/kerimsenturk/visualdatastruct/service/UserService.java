package com.kerimsenturk.visualdatastruct.service;

import com.kerimsenturk.visualdatastruct.dto.UserDto;
import com.kerimsenturk.visualdatastruct.dto.converter.UserDtoConverter;
import com.kerimsenturk.visualdatastruct.dto.request.LoginUserRequest;
import com.kerimsenturk.visualdatastruct.dto.request.RegisterUserRequest;
import com.kerimsenturk.visualdatastruct.model.User;
import com.kerimsenturk.visualdatastruct.repository.UserRepository;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service
public class UserService {
    private final UserRepository userRepository;
    private final UserDtoConverter userDtoConverter;
    private final PasswordEncoder passwordEncoder;
    public UserService(UserRepository userRepository, UserDtoConverter userDtoConverter,@Lazy PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.userDtoConverter = userDtoConverter;
        this.passwordEncoder = passwordEncoder;
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

            //Password encoding by bcrypt encoder
            registerUserRequest.setPassword(
                    passwordEncoder.encode(registerUserRequest.getPassword())
            );
            System.out.println(registerUserRequest.getPassword());
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


    public User getByMail(String mail){

        return userRepository.getTopByMail(mail);

    }
}

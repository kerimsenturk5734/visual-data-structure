package com.kerimsenturk.visualdatastruct.dto.converter;

import com.kerimsenturk.visualdatastruct.dto.UserDto;
import com.kerimsenturk.visualdatastruct.model.User;
import org.springframework.stereotype.Component;

@Component
public class UserDtoConverter implements DtoConverter<User, UserDto>{
    @Override
    public UserDto convert(User from) {
        if(from==null)
            return new UserDto();

        return new UserDto(
                from.getUid(),
                from.getName(),
                from.getSurname(),
                from.getMail(),
                from.getPassword());
    }

    public User convert(UserDto from){
        if(from==null)
            return new User();

        return new User(
                from.getUid(),
                from.getName(),
                from.getSurname(),
                from.getMail(),
                from.getPassword());
    }
}

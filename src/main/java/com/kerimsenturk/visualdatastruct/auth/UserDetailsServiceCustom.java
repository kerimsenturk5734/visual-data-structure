package com.kerimsenturk.visualdatastruct.auth;

import com.kerimsenturk.visualdatastruct.model.User;
import com.kerimsenturk.visualdatastruct.service.UserService;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class UserDetailsServiceCustom implements UserDetailsService {
    private final UserService userService;

    public UserDetailsServiceCustom(UserService userService) {
        this.userService = userService;
    }

    @Override
    public UserDetails loadUserByUsername(String mail) throws UsernameNotFoundException {
        User user=userService.getByMail(mail);

        if(user != null){
            return new org.springframework.security.core.userdetails.User(mail,user.getPassword(),new ArrayList<>());
        }

        throw new UsernameNotFoundException(mail+" ile kullanıcıı bulunamadı.");
    }
}

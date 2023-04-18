package com.kerimsenturk.visualdatastruct.repository;

import com.kerimsenturk.visualdatastruct.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface UserRepository extends JpaRepository<User,Integer> {
    User getTopByMail(String mail);
}

package com.kerimsenturk.visualdatastruct.repository;

import com.kerimsenturk.visualdatastruct.model.Result;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ResultRepository extends JpaRepository<Result,Integer> {
    Optional<List<Result>> findByUser_Uid(int uid);
    Optional<List<Result>> findByUser_Mail(String mail);
    Optional<Result> findByUser_UidAndCourse_Id(int uid,int courseId);

}

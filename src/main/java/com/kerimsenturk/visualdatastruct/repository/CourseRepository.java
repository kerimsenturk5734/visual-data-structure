package com.kerimsenturk.visualdatastruct.repository;

import com.kerimsenturk.visualdatastruct.model.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CourseRepository extends JpaRepository<Course,Integer> {

}

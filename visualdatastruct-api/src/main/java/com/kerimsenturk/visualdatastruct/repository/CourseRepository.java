package com.kerimsenturk.visualdatastruct.repository;

import com.kerimsenturk.visualdatastruct.model.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CourseRepository extends JpaRepository<Course,Integer> {
    Optional<List<Course>> getAllByOrderById();
    Optional<Course> getTopByName(String name);
}

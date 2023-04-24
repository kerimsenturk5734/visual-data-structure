package com.kerimsenturk.visualdatastruct.controller;

import com.kerimsenturk.visualdatastruct.dto.request.CreateCourseRequest;
import com.kerimsenturk.visualdatastruct.dto.request.CreateCourseWithoutQuestionsRequest;
import com.kerimsenturk.visualdatastruct.model.Course;
import com.kerimsenturk.visualdatastruct.service.CourseService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/v1/api/courses")
@CrossOrigin
public class CourseController {
    private final CourseService courseService;

    public CourseController(CourseService courseService) {
        this.courseService = courseService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getById(@PathVariable(name = "id") int id){
        return ResponseEntity.of(Optional.of(courseService.getById(id)));
    }

    @GetMapping("/")
    public ResponseEntity<List<Course>> getAllByOrderById(){
        return ResponseEntity.of(Optional.of(courseService.getAllByOrderById()));
    }

    @GetMapping("/name_{name}")
    public ResponseEntity<?> getByName(@PathVariable(name = "name") String name){
        return ResponseEntity.of(Optional.of(courseService.getByName(name)));
    }
    @PostMapping("/addwithout")
    public ResponseEntity<?> addWithout(CreateCourseWithoutQuestionsRequest createCourseWithoutQuestionsRequest){

        return ResponseEntity.status(courseService.save(createCourseWithoutQuestionsRequest)).build();
    }

    @PostMapping("/add")
    public ResponseEntity<?> add(CreateCourseRequest createCourseRequest){
        return ResponseEntity.status(courseService.save(createCourseRequest)).build();
    }

}

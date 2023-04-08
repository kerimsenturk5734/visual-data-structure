package com.kerimsenturk.visualdatastruct.controller;

import com.kerimsenturk.visualdatastruct.dto.request.CreateCourseRequest;
import com.kerimsenturk.visualdatastruct.dto.request.CreateCourseWithoutQuestionsRequest;
import com.kerimsenturk.visualdatastruct.service.CourseService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/v1/api/courses")
public class CourseController {
    private final CourseService courseService;

    public CourseController(CourseService courseService) {
        this.courseService = courseService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getById(@PathVariable(name = "id") int id){
        return courseService.getById(id);
    }

    @PostMapping("/add")
    public ResponseEntity<?> add(CreateCourseWithoutQuestionsRequest createCourseWithoutQuestionsRequest){

        return courseService.save(createCourseWithoutQuestionsRequest);
    }

    @PostMapping("/addwithout")
    public ResponseEntity<?> add(CreateCourseRequest createCourseRequest){
        return courseService.save(createCourseRequest);
    }

}

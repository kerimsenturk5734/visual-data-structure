package com.kerimsenturk.visualdatastruct.service;

import com.kerimsenturk.visualdatastruct.dto.converter.QuestionDtoConverter;
import com.kerimsenturk.visualdatastruct.dto.request.CreateCourseRequest;
import com.kerimsenturk.visualdatastruct.dto.request.CreateCourseWithoutQuestionsRequest;
import com.kerimsenturk.visualdatastruct.model.Course;
import com.kerimsenturk.visualdatastruct.model.Question;
import com.kerimsenturk.visualdatastruct.repository.CourseRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CourseService {
    private final CourseRepository courseRepository;
    private final QuestionDtoConverter questionDtoConverter;
    public CourseService(CourseRepository courseRepository, QuestionDtoConverter questionDtoConverter) {
        this.courseRepository = courseRepository;
        this.questionDtoConverter = questionDtoConverter;
    }

    public Course getById(int id){
        Optional<Course> course=courseRepository.findById(id);
        return course.orElseThrow();
    }

    public List<Course> getAllByOrderById(){
        Optional<List<Course>> courses=courseRepository.getAllByOrderById();
        return courses.orElseThrow();
    }

    public Course getByName(String name){
        Optional<Course> course=courseRepository.getTopByName(name);
        return course.orElseThrow();
    }
    public HttpStatus save(CreateCourseWithoutQuestionsRequest createCourseWithoutQuestionsRequest){
        Course course=new Course(
                0,
                createCourseWithoutQuestionsRequest.getName(),
                createCourseWithoutQuestionsRequest.getPath(),
                null,
                null);
        courseRepository.save(course);
        return HttpStatus.CREATED;
    }
    public HttpStatus save(CreateCourseRequest createCourseRequest){
        List<Question> questions=createCourseRequest.
                getQuestions().stream().map(questionDtoConverter::convert).collect(Collectors.toList());

        Course course=new Course(
                0,
                createCourseRequest.getName(),
                createCourseRequest.getPath(),
                questions,
                null);

        courseRepository.save(course);
        return HttpStatus.CREATED;
    }

}

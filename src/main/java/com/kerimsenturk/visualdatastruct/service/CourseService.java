package com.kerimsenturk.visualdatastruct.service;

import com.kerimsenturk.visualdatastruct.dto.CourseDto;
import com.kerimsenturk.visualdatastruct.dto.converter.CourseDtoConverter;
import com.kerimsenturk.visualdatastruct.dto.converter.QuestionDtoConverter;
import com.kerimsenturk.visualdatastruct.dto.request.CreateCourseRequest;
import com.kerimsenturk.visualdatastruct.dto.request.CreateCourseWithoutQuestionsRequest;
import com.kerimsenturk.visualdatastruct.model.Course;
import com.kerimsenturk.visualdatastruct.model.Question;
import com.kerimsenturk.visualdatastruct.repository.CourseRepository;
import com.kerimsenturk.visualdatastruct.utilities.results.DataResult;
import com.kerimsenturk.visualdatastruct.utilities.results.SuccessDataResult;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CourseService {
    private final CourseRepository courseRepository;
    private final QuestionDtoConverter questionDtoConverter;
    private final CourseDtoConverter courseDtoConverter;
    public CourseService(CourseRepository courseRepository, QuestionDtoConverter questionDtoConverter, CourseDtoConverter courseDtoConverter) {
        this.courseRepository = courseRepository;
        this.questionDtoConverter = questionDtoConverter;
        this.courseDtoConverter = courseDtoConverter;
    }

    public ResponseEntity<CourseDto> getById(int id){
        Optional<Course> course=courseRepository.findById(id);

        if(course.isPresent()){
            CourseDto courseDto=courseDtoConverter.convert(course.get());
            return ResponseEntity.ok(courseDto);
        }

        return ResponseEntity.of(Optional.empty());
    }

    public ResponseEntity<DataResult<List<CourseDto>>> getAllByOrderById(){
        List<CourseDto> courses=courseRepository
                .getAllByOrderById()
                .stream().map(courseDtoConverter::convert).toList();

        return ResponseEntity.of(
                Optional.of(new SuccessDataResult<>(
                                courses,
                                null)));
    }

    public ResponseEntity<CourseDto> getByName(String name){
        Optional<Course> course=courseRepository.getTopByName(name);

        if(course.isPresent()){
            CourseDto courseDto=courseDtoConverter.convert(course.get());
            return ResponseEntity.ok(courseDto);
        }

        return ResponseEntity.of(Optional.empty());
    }
    public ResponseEntity<DataResult<Course>> save(CreateCourseWithoutQuestionsRequest createCourseWithoutQuestionsRequest){
        Course course=new Course(
                0,
                createCourseWithoutQuestionsRequest.getName(),
                createCourseWithoutQuestionsRequest.getPath(),
                null,
                null);

        return ResponseEntity.of(Optional.of(new SuccessDataResult<>(courseRepository.save(course), "Kurs kaydedildi")));
    }
    public ResponseEntity<DataResult<Course>> save(CreateCourseRequest createCourseRequest){
        List<Question> questions=createCourseRequest.
                getQuestions().stream().map(questionDtoConverter::convert).collect(Collectors.toList());

        Course course=new Course(
                0,
                createCourseRequest.getName(),
                createCourseRequest.getPath(),
                questions,
                null);

        return ResponseEntity.of(Optional.of(new SuccessDataResult<>(courseRepository.save(course), "Kurs kaydeildi")));
    }

}

package com.kerimsenturk.visualdatastruct.service;

import com.kerimsenturk.visualdatastruct.dto.CourseDto;
import com.kerimsenturk.visualdatastruct.dto.converter.CourseDtoConverter;
import com.kerimsenturk.visualdatastruct.dto.converter.QuestionDtoConverter;
import com.kerimsenturk.visualdatastruct.dto.request.CreateCourseRequest;
import com.kerimsenturk.visualdatastruct.dto.request.CreateCourseWithoutQuestionsRequest;
import com.kerimsenturk.visualdatastruct.model.Course;
import com.kerimsenturk.visualdatastruct.model.Question;
import com.kerimsenturk.visualdatastruct.repository.CourseRepository;
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

    public Optional<CourseDto> getById(int id){
        Optional<Course> course=courseRepository.findById(id);
        return course.map(courseDtoConverter::convert);
    }

    public Optional<List<CourseDto>> getAllByOrderById(){
        List<CourseDto> courses=courseRepository
                .getAllByOrderById()
                .stream().map(courseDtoConverter::convert).toList();

        return Optional.of(courses);
    }

    public Optional<CourseDto> getByName(String name){
        Optional<Course> course=courseRepository.getTopByName(name);
        return course.map(courseDtoConverter::convert);
    }
    public Optional<CourseDto> save(CreateCourseWithoutQuestionsRequest createCourseWithoutQuestionsRequest){
        Course course=new Course(
                0,
                createCourseWithoutQuestionsRequest.getName(),
                createCourseWithoutQuestionsRequest.getPath(),
                null,
                null);

        return Optional.of(courseDtoConverter.convert(courseRepository.save(course)));
    }
    public Optional<CourseDto> save(CreateCourseRequest createCourseRequest){
        List<Question> questions=createCourseRequest.
                getQuestions().stream().map(questionDtoConverter::convert).collect(Collectors.toList());

        Course course=new Course(
                0,
                createCourseRequest.getName(),
                createCourseRequest.getPath(),
                questions,
                null);

        return Optional.of(courseDtoConverter.convert(courseRepository.save(course)));
    }

}

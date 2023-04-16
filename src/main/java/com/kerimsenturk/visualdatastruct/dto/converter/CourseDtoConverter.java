package com.kerimsenturk.visualdatastruct.dto.converter;

import com.kerimsenturk.visualdatastruct.dto.CourseDto;
import com.kerimsenturk.visualdatastruct.dto.QuestionDto;
import com.kerimsenturk.visualdatastruct.model.Course;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import java.util.List;

import java.util.stream.Collectors;

@Component
public class CourseDtoConverter implements DtoConverter<Course, CourseDto> {
    private final QuestionDtoConverter questionDtoConverter;
    private final ResultDtoConverter resultDtoConverter;
    public CourseDtoConverter(QuestionDtoConverter questionDtoConverter, @Lazy ResultDtoConverter resultDtoConverter) {
        this.questionDtoConverter = questionDtoConverter;
        this.resultDtoConverter = resultDtoConverter;
    }

    @Override
    public CourseDto convert(Course from) {
        if(from==null)
            return new CourseDto();

        List<QuestionDto> questionDtos=null;
        if(from.getQuestions()!=null)
            questionDtos=from.getQuestions().stream().map(questionDtoConverter::convert).collect(Collectors.toList());

        return new CourseDto(
                from.getId(),
                from.getName(),
                from.getPath(),
                questionDtos,
               null);
    }

    public Course convert(CourseDto from){
        if(from==null)
            return new Course();

        return new Course(
                from.getId(),
                from.getName(),
                from.getPath(),
                from.getQuestions().stream().map(questionDtoConverter::convert).collect(Collectors.toList()),
                from.getResult().stream().map(resultDtoConverter::convert).collect(Collectors.toList()));
    }
}

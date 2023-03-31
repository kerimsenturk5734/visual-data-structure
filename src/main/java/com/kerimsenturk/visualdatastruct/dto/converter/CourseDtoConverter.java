package com.kerimsenturk.visualdatastruct.dto.converter;

import com.kerimsenturk.visualdatastruct.dto.CourseDto;
import com.kerimsenturk.visualdatastruct.model.Course;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

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

        return new CourseDto(
                from.getId(),
                from.getName(),
                from.getPath(),
                from.getQuestions().stream().map(questionDtoConverter::convert).collect(Collectors.toList()),
                resultDtoConverter.convert(from.getResult()));
    }
}

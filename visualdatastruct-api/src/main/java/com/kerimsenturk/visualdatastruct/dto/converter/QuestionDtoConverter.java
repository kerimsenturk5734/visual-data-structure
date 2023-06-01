package com.kerimsenturk.visualdatastruct.dto.converter;

import com.kerimsenturk.visualdatastruct.dto.QuestionDto;
import com.kerimsenturk.visualdatastruct.dto.request.CreateQuestionRequest;
import com.kerimsenturk.visualdatastruct.model.Question;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import java.util.stream.Collectors;

@Component
public class QuestionDtoConverter implements DtoConverter<Question, QuestionDto> {

    private final CourseDtoConverter courseDtoConverter;
    private final ChoiceDtoConverter choiceDtoConverter;

    public QuestionDtoConverter(@Lazy CourseDtoConverter courseDtoConverter, ChoiceDtoConverter choiceDtoConverter) {
        this.courseDtoConverter = courseDtoConverter;
        this.choiceDtoConverter = choiceDtoConverter;
    }

    @Override
    public QuestionDto convert(Question from) {
        if(from==null)
            return new QuestionDto();

        return new QuestionDto(
                from.getId(),
                from.getDescription(),
                from.getImage(),
                from.getLevel(),
                from.getChoices().stream().map(choiceDtoConverter::convert).collect(Collectors.toList()),
                courseDtoConverter.convert(from.getCourse()));
    }

    public Question convert(QuestionDto from){
        if(from==null)
            return new Question();

        return new Question(
                from.getId(),
                from.getDescription(),
                from.getImage(),
                from.getLevel(),
                from.getChoices().stream().map(choiceDtoConverter::convert).collect(Collectors.toList()),
                courseDtoConverter.convert(from.getCourse()));
    }

    public Question convert(CreateQuestionRequest from) {
        if(from==null)
            return new Question();

        return new Question(
                0,
                from.getDescription(),
                from.getImage(),
                from.getLevel(),
                from.getChoices().stream().map(choiceDtoConverter::convert).collect(Collectors.toList()),
                null);
    }
}

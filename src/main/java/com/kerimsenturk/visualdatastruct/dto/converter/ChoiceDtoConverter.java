package com.kerimsenturk.visualdatastruct.dto.converter;

import com.kerimsenturk.visualdatastruct.dto.ChoiceDto;
import com.kerimsenturk.visualdatastruct.model.Choice;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

@Component
public class ChoiceDtoConverter implements DtoConverter<Choice, ChoiceDto>{
    private final QuestionDtoConverter questionDtoConverter;

    public ChoiceDtoConverter(@Lazy QuestionDtoConverter questionDtoConverter) {
        this.questionDtoConverter = questionDtoConverter;
    }

    @Override
    public ChoiceDto convert(Choice from) {
        if(from==null)
            return new ChoiceDto();

        return new ChoiceDto(
                from.getId(),
                from.getDescription(),
                from.isAnswer(),
                questionDtoConverter.convert(from.getQuestion()));
    }
}

package com.kerimsenturk.visualdatastruct.dto.converter;

import com.kerimsenturk.visualdatastruct.dto.ResultDto;
import com.kerimsenturk.visualdatastruct.model.Result;
import org.springframework.stereotype.Component;

@Component
public class ResultDtoConverter implements DtoConverter<Result, ResultDto> {
    private final UserDtoConverter userDtoConverter;
    private final CourseDtoConverter courseDtoConverter;

    public ResultDtoConverter(UserDtoConverter userDtoConverter, CourseDtoConverter courseDtoConverter) {
        this.userDtoConverter = userDtoConverter;
        this.courseDtoConverter = courseDtoConverter;
    }

    @Override
    public ResultDto convert(Result from) {
        if(from==null)
            return new ResultDto();

        return new ResultDto(from.getId(),
                from.getResult(),
                userDtoConverter.convert(from.getUser()),
                courseDtoConverter.convert(from.getCourse()));
    }

    public Result convert(ResultDto from) {
        if(from==null)
            return new Result();

        return new Result(from.getId(),
                from.getResult(),
                userDtoConverter.convert(from.getUser()),
                courseDtoConverter.convert(from.getCourse()));
    }
}

package com.kerimsenturk.visualdatastruct.dto.converter;

public interface DtoConverter<BaseModel,DtoModel> {
    DtoModel convert(BaseModel from);
}

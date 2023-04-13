package com.kerimsenturk.visualdatastruct.service;

import com.kerimsenturk.visualdatastruct.dto.ResultDto;
import com.kerimsenturk.visualdatastruct.dto.converter.ResultDtoConverter;
import com.kerimsenturk.visualdatastruct.model.Result;
import com.kerimsenturk.visualdatastruct.repository.ResultRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ResultService {
    private final ResultRepository resultRepository;
    private final ResultDtoConverter resultDtoConverter;
    public ResultService(ResultRepository resultRepository, ResultDtoConverter resultDtoConverter) {
        this.resultRepository = resultRepository;
        this.resultDtoConverter = resultDtoConverter;
    }

    public ResponseEntity<ResultDto> getByResultId(int id){
        Optional<Result> result=resultRepository.findById(id);

        if(result.isPresent()){
            ResultDto resultDto=resultDtoConverter.convert(result.get());
            return ResponseEntity.ok(resultDto);
        }

        return ResponseEntity.of(Optional.empty());
    }

    public ResponseEntity<ResultDto> getByUserId(int uid){
        Optional<Result> result=resultRepository.findByUser_Uid(uid);

        if(result.isPresent()){
            ResultDto resultDto=resultDtoConverter.convert(result.get());
            return ResponseEntity.ok(resultDto);
        }

        return ResponseEntity.of(Optional.empty());
    }

}

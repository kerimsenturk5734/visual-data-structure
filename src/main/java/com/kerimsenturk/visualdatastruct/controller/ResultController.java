package com.kerimsenturk.visualdatastruct.controller;

import com.kerimsenturk.visualdatastruct.dto.ResultDto;
import com.kerimsenturk.visualdatastruct.dto.request.CreateResultRequest;
import com.kerimsenturk.visualdatastruct.service.ResultService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/v1/api/result")
public class ResultController {
    private final ResultService resultService;

    public ResultController(ResultService resultService) {
        this.resultService = resultService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<ResultDto> getByResultId(@PathVariable(name = "id") int id){
        return resultService.getByResultId(id);
    }

    @GetMapping("/user_uid_{uid}")
    public ResponseEntity<List<ResultDto>> getByUserId(@PathVariable(name = "uid") int uid){
        return resultService.getByUserId(uid);
    }

    @PostMapping("/")
    public ResponseEntity<ResultDto> add(CreateResultRequest createResultRequest){
        return ResponseEntity.of(resultService.add(createResultRequest));
    }

}

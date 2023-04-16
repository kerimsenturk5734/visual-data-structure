package com.kerimsenturk.visualdatastruct.controller;

import com.kerimsenturk.visualdatastruct.dto.request.CreateResultRequest;
import com.kerimsenturk.visualdatastruct.model.Result;
import com.kerimsenturk.visualdatastruct.service.ResultService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/v1/api/result")
public class ResultController {
    private final ResultService resultService;

    public ResultController(ResultService resultService) {
        this.resultService = resultService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<Result> getByResultId(@PathVariable(name = "id") int id){
        return ResponseEntity.of(Optional.of(resultService.getByResultId(id)));
    }

    @GetMapping("/user_uid_{uid}")
    public ResponseEntity<List<Result>> getByUserId(@PathVariable(name = "uid") int uid){
        return ResponseEntity.of(Optional.of(resultService.getByUserId(uid)));
    }

    @PostMapping("/")
    public ResponseEntity<?> add(CreateResultRequest createResultRequest){
        return ResponseEntity.status(resultService.add(createResultRequest)).build();
    }

}

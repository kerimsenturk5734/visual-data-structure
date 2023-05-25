package com.kerimsenturk.visualdatastruct.controller;

import com.kerimsenturk.visualdatastruct.dto.request.CreateResultRequest;
import com.kerimsenturk.visualdatastruct.model.Result;
import com.kerimsenturk.visualdatastruct.service.ResultService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/v1/api/result")
@CrossOrigin
public class ResultController {
    private final ResultService resultService;

    public ResultController(ResultService resultService) {
        this.resultService = resultService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<Result> getById(@PathVariable(name = "id") int id){
        return ResponseEntity.of(Optional.of(resultService.getById(id)));
    }

    @GetMapping("/user_uid_{uid}")
    public ResponseEntity<List<Result>> getByUserId(@PathVariable(name = "uid") int uid){
        return ResponseEntity.of(Optional.of(resultService.getByUserId(uid)));
    }

    @GetMapping("/user_mail_{mail}")
    public ResponseEntity<List<Result>> getByUser_Mail(@PathVariable(name = "mail") String mail){
        return ResponseEntity.of(Optional.of(resultService.getByUser_Mail(mail)));
    }

    @GetMapping("user_uid_{uid}/course_id_{courseId}")
    public ResponseEntity<Result>
    getByUserIdAndCourseId(@PathVariable(name = "uid") int uid, @PathVariable(name="courseId") int courseId){
        Result result = resultService.getByUserIdAndCourseId(uid,courseId);

        if(result != null)
            return ResponseEntity.ok(result);

        return ResponseEntity.notFound().build();
    }
    @PostMapping("/")
    public ResponseEntity<?> add(@RequestBody CreateResultRequest createResultRequest){
        return ResponseEntity.status(resultService.add(createResultRequest)).build();
    }

}

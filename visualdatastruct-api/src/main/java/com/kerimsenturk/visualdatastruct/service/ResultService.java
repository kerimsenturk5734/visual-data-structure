package com.kerimsenturk.visualdatastruct.service;

import com.kerimsenturk.visualdatastruct.dto.request.CreateResultRequest;
import com.kerimsenturk.visualdatastruct.model.Course;
import com.kerimsenturk.visualdatastruct.model.Result;
import com.kerimsenturk.visualdatastruct.model.User;
import com.kerimsenturk.visualdatastruct.repository.ResultRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ResultService {
    private final ResultRepository resultRepository;
    private final UserService userService;
    private final CourseService courseService;
    public ResultService(ResultRepository resultRepository, UserService userService, CourseService courseService) {
        this.resultRepository = resultRepository;
        this.userService = userService;
        this.courseService = courseService;
    }

    public Result getById(int id){
        Optional<Result> result=resultRepository.findById(id);
        return result.orElseThrow();
    }

    public Result getByUserIdAndCourseId(int uid,int courseId){
        Optional<Result> result=resultRepository.findByUser_UidAndCourse_Id(uid,courseId);

        return result.orElseThrow();
    }

    public List<Result> getByUserId(int uid){
        Optional<List<Result>> resultList=resultRepository.findByUser_Uid(uid);

        return resultList.orElseThrow();

    }

    public boolean isExist(int uid,int courseId){
        Optional<Result> resultOptional =resultRepository.findByUser_UidAndCourse_Id(uid,courseId);

        return resultOptional.isPresent();
    }

    public HttpStatus add(CreateResultRequest createResultRequest){
        if(isExist(createResultRequest.getUserId(),createResultRequest.getCourseId()))
            return HttpStatus.CONFLICT;

        User user=userService.getByUID(createResultRequest.getUserId());
        Course course = courseService.getById(createResultRequest.getCourseId());

        Result result=new Result(0,createResultRequest.getResult(),user,course);
        resultRepository.save(result);

        return HttpStatus.CREATED;

    }

}

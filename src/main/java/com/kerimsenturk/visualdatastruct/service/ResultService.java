package com.kerimsenturk.visualdatastruct.service;

import com.kerimsenturk.visualdatastruct.dto.CourseDto;
import com.kerimsenturk.visualdatastruct.dto.ResultDto;
import com.kerimsenturk.visualdatastruct.dto.UserDto;
import com.kerimsenturk.visualdatastruct.dto.converter.CourseDtoConverter;
import com.kerimsenturk.visualdatastruct.dto.converter.ResultDtoConverter;
import com.kerimsenturk.visualdatastruct.dto.converter.UserDtoConverter;
import com.kerimsenturk.visualdatastruct.dto.request.CreateResultRequest;
import com.kerimsenturk.visualdatastruct.model.Course;
import com.kerimsenturk.visualdatastruct.model.Result;
import com.kerimsenturk.visualdatastruct.model.User;
import com.kerimsenturk.visualdatastruct.repository.ResultRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ResultService {
    private final ResultRepository resultRepository;
    private final ResultDtoConverter resultDtoConverter;
    private final UserService userService;
    private final CourseService courseService;
    private final UserDtoConverter userDtoConverter;
    private final CourseDtoConverter courseDtoConverter;

    public ResultService(ResultRepository resultRepository, ResultDtoConverter resultDtoConverter, UserService userService, CourseService courseService, UserDtoConverter userDtoConverter, CourseDtoConverter courseDtoConverter) {
        this.resultRepository = resultRepository;
        this.resultDtoConverter = resultDtoConverter;
        this.userService = userService;
        this.courseService = courseService;
        this.userDtoConverter = userDtoConverter;
        this.courseDtoConverter = courseDtoConverter;
    }

    public ResponseEntity<ResultDto> getByResultId(int id){
        Optional<Result> result=resultRepository.findById(id);

        if(result.isPresent()){
            ResultDto resultDto=resultDtoConverter.convert(result.get());
            return ResponseEntity.ok(resultDto);
        }

        return ResponseEntity.of(Optional.empty());
    }

    public ResponseEntity<List<ResultDto>> getByUserId(int uid){
        Optional<List<Result>> resultList=resultRepository.findByUser_Uid(uid);

        if(resultList.isPresent()){
            List<ResultDto> resultDtoList=resultList.get()
                    .stream()
                    .map(resultDtoConverter::convert)
                    .collect(Collectors.toList());

            return ResponseEntity.ok(resultDtoList);
        }

        return ResponseEntity.of(Optional.empty());
    }

    public Optional<ResultDto> add(CreateResultRequest createResultRequest){
        Optional<UserDto> userDtoOptional=userService.getByUID(createResultRequest.getUserId());
        Optional<CourseDto> courseDtoOptional= courseService.getById(createResultRequest.getCourseId());

        if(courseDtoOptional.isPresent() && userDtoOptional.isPresent()){
            User user=userDtoConverter.convert(userDtoOptional.get());
            Course course=courseDtoConverter.convert(courseDtoOptional.get());

            Result result=new Result(0,createResultRequest.getResult(),user,course);

            return Optional.of(resultDtoConverter.convert(resultRepository.save(result)));

        }

        return Optional.empty();
    }

}

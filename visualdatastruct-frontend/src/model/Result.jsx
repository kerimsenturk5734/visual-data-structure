import { Course } from "./Course";

export class Result{
    constructor(id,result){
        this.id=id;//int
        this.result=result;//int
        this.course=new Course();//new Course()
    }
}

export class CreateResultRequest {
    constructor(result,userId,courseId){
        this.result = result;
        this.userId = userId;
        this.courseId = courseId;
    }
}

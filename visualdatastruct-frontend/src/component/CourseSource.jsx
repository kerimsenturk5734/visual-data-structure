import {Course} from '../model/Course';
import { Section } from '../model/Section';
import CourseService from '../service/CourseService';
import {Content} from './Content';

const course = new Course();
var sections = [new Section()];
const imagePaths = [new String()];

var response="";

async function StackSource() {
    await CourseService.getByName("stack");
    response = CourseService.getResponse();

    course.id=response.id;
    course.name=response.name;
    course.questions=response.questions;
    
    sections=[
        new Section("Push()","Bu push fonksiyonun tanimidir. Push fonksiyonu stack'e eleman eklemek için kullanılır. Bu ekleme işlemi sonucunda eleman stack'in en üstüne eklenir.",[""]),
        new Section("pop()","Bu pop fonksiyonun tanimidir.",[""]),
        new Section("peek()","Bu peek fonksiyonun tanimidir.",[""]),
        new Section("get()","Bu get fonksiyonun tanimidir.",[""])
    ]
    
    course.sections=sections;
    console.log(course);
    return course;
}

async function QueueSource() {
    await CourseService.getByName("queue");
    response = CourseService.getResponse();

    course.id=response.id;
    course.name=response.name;
    course.questions=response.questions;
    
    sections=[
        new Section("push()","Bu push fonksiyonun tanimidir.",[""]),
        new Section("pop()","Bu pop fonksiyonun tanimidir.",[""]),
        new Section("peek()","Bu peek fonksiyonun tanimidir.",[""]),
    ]

    course.sections=sections;
    return course;
}

async function LinkedListSource() {
    await CourseService.getByName("linked list");
    response = CourseService.getResponse();

    course.id=response.id;
    course.name=response.name;
    course.questions=response.questions;
    
    //Kurs içeriğini yerleştir.
    sections=[
        new Section("push()","Bu push fonksiyonun tanimidir.",[""]),
        new Section("pop()","Bu pop fonksiyonun tanimidir.",[""]),
        new Section("peek()","Bu peek fonksiyonun tanimidir.",[""]),
    ]

    course.sections=sections;
    return course;
}

async function TreeSource() {
    await CourseService.getByName("tree");
    response = CourseService.getResponse();

    course.id=response.id;
    course.name=response.name;
    course.questions=response.questions;
    
    sections=[
        new Section("push()","Bu push fonksiyonun tanimidir.",[""]),
        new Section("pop()","Bu pop fonksiyonun tanimidir.",[""]),
        new Section("peek()","Bu peek fonksiyonun tanimidir.",[""]),
    ]

    course.sections=sections;
    return course;
}

async function GraphSource() {
    await CourseService.getByName("graph");
    response = CourseService.getResponse();

    course.id=response.id;
    course.name=response.name;
    course.questions=response.questions;
    
    sections=[
        new Section("push()","Bu push fonksiyonun tanimidir.",[""]),
        new Section("pop()","Bu pop fonksiyonun tanimidir.",[""]),
        new Section("peek()","Bu peek fonksiyonun tanimidir.",[""]),
    ]

    course.sections=sections;
    return course;
}


export default function CourseSourceFactory(courseName){
    switch (courseName) {
        case "stack":
            return StackSource()
            
        case "queue":
            return QueueSource()

        case "linkedlist":
            return LinkedListSource()

        case "tree":
            return TreeSource()

        case "graph":
            return GraphSource()

        default:
            return Content();
    }

}

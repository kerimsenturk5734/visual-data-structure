import {Course} from '../model/Course';
import { Section } from '../model/Section';
import CourseService from '../service/CourseService';
import {Content} from './Content';
import stackSectionJson from '../course_section_source/stackSections.json';

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

    sections = JSON.parse(JSON.stringify(stackSectionJson));
    console.log(sections[0].contentText)
    course.sections=sections;
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

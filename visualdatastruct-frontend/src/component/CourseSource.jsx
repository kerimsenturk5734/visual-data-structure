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
        new Section("Push()","In computer science, a data structure is a way of organizing and storing data in a computer program so that it can be accessed and used efficiently. Data structures provide a means of managing large amounts of data, enabling efficient searching, sorting, insertion, and deletion of data.Data structures can be categorized into two types: primitive data structures and non-primitive data structures. Primitive data structures are the most basic data structures available in a programming language, such as integers, floating-point numbers, characters, and booleans. Non-primitive data structures are complex data structures that are built using primitive data types, such as arrays, linked lists, stacks, queues, trees, graphs, and hash tables. The choice of data structure for a particular task depends on the type and amount of data to be processed, the operations that need to be performed on the data, and the efficiency requirements of the program. Efficient use of data structures can greatly improve the performance of a program, making it faster and more memory-efficient. A data structure is a particular way of organizing data in a computer so that it can be used effectively. The idea is to reduce the space and time complexities of different tasks. ",[""]),
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

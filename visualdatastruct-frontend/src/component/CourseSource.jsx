import {Course} from '../model/Course';
import { Section } from '../model/Section';

import CourseService from '../service/CourseService';
import {Content} from './Content';
import CONTENT_NAME from '../utils/CONTENT_NAME';

import stackSectionsJson from '../course_section_source/stackSections.json';
import queueSectionsJson from '../course_section_source/queueSections.json'
import linkedlistSectionsJson from '../course_section_source/linkedlistSections.json';
import treeSectionsJson from '../course_section_source/treeSections.json';
import graphSectionsJson from '../course_section_source/graphSections.json';


const course = new Course();
var sections = [new Section()];
const imagePaths = [new String()];

var response="";

async function StackSource() {
    await CourseService.getByName(CONTENT_NAME.STACK);
    response = CourseService.getResponse();

    course.id=response.id;
    course.name=response.name;
    course.questions=response.questions;

    sections = JSON.parse(JSON.stringify(stackSectionsJson));

    course.sections=sections;
    return course;
}

async function QueueSource() {
    await CourseService.getByName(CONTENT_NAME.QUEUE);
    response = CourseService.getResponse();

    course.id=response.id;
    course.name=response.name;
    course.questions=response.questions;
    
    sections = JSON.parse(JSON.stringify(queueSectionsJson));

    course.sections=sections;
    return course;
}

async function LinkedListSource() {
    await CourseService.getByName('linked list');
    response = CourseService.getResponse();

    course.id=response.id;
    course.name=response.name;
    course.questions=response.questions;
    
    
    sections = JSON.parse(JSON.stringify(linkedlistSectionsJson));

    course.sections=sections;
    return course;
}

async function TreeSource() {
    await CourseService.getByName(CONTENT_NAME.TREE);
    response = CourseService.getResponse();

    course.id=response.id;
    course.name=response.name;
    course.questions=response.questions;
    
    sections = JSON.parse(JSON.stringify(treeSectionsJson));

    course.sections=sections;
    return course;
}

async function GraphSource() {
    await CourseService.getByName(CONTENT_NAME.GRAPH);
    response = CourseService.getResponse();

    course.id=response.id;
    course.name=response.name;
    course.questions=response.questions;
    sections = JSON.parse(JSON.stringify(graphSectionsJson));

    course.sections=sections;
    return course;
}


export default function CourseSourceFactory(courseName){
    switch (courseName) {
        case CONTENT_NAME.STACK:
            return StackSource()
            
        case CONTENT_NAME.QUEUE:
            return QueueSource()

        case CONTENT_NAME.LINKEDLIST:
            return LinkedListSource()

        case CONTENT_NAME.TREE:
            return TreeSource()

        case CONTENT_NAME.GRAPH:
            return GraphSource()

        default:
            return Content();
    }

}

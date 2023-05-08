import {Question} from './Question'
import { Section } from './Section';

export class Course{
    constructor(id,name){
        this.id=id;//int
        this.name=name;//String
        this.sections=[new Section()];//Section[]
        this.questions=[new Question()]//Question[]
    }

    
}
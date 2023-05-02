export class Course{
    constructor(id,name,sections,questions){
        this.id=id;//int
        this.name=name;//String
        this.sections=sections;//Section[]
        this.questions=questions;//Question[]
    }
}
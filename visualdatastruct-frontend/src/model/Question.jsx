import {Choice} from './Choice'

export class Question{
    constructor(id,description){
        this.id=id;//int
        this.description=description;//String
        this.image=new Image();//Image
        this.choices=[new Choice()];//Choice[]
    }
}
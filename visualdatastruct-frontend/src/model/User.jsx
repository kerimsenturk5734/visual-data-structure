export class LoginUserRequest{
    constructor(mail,password){
        this.mail=mail;
        this.password=password;
    }
}

export class RegisterUserRequest{
    constructor(name, surname, mail, password){
        this.name=name;
        this.surname=surname;
        this.mail=mail;
        this.password=password;
    }
}

export class User{
    constructor(uid, name, surname, mail,password){
        this.uid=uid;
        this.name=name;
        this.surname=surname;
        this.mail=mail;
        this.password=password;
    }
}
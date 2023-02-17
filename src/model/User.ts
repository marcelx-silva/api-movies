import {v4 as uuid} from "uuid";

export class User{
    private readonly uuid:string;
    private readonly fullName:string;
    private readonly email:string;
    private readonly username:string;
    private readonly password:string;

    constructor(fullName:string,email:string,username:string,password:string) {
        this.uuid = uuid()
        this.fullName = fullName;
        this.email = email;
        this.username = username;
        this.password = password;
    }

    getId(){
        return this.uuid;
    }

    getFullName(){
        return this.fullName;
    }

    getEmail(){
        return this.email;
    }

    getPassword(){
        return this.password;
    }

    getUsername(){
        return this.username;
    }


}
import {v4 as uuid} from "uuid";

class User{
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

describe(`User Model`,()=>{

    const user:User = new User(`UserFullName`,`user@gmail.com`,`username`,`userpass`);

    it('should create an user with uuid', function () {
        expect(user).toHaveProperty(`uuid`)
        expect(user.getId()).toBeTruthy();
    });

    it('should get user fullname', function () {
        expect(user.getFullName()).toBeTruthy();
    });

    it('should get user email', function () {
        expect(user.getEmail()).toBeTruthy();
    });

    it('should get user username', function () {
        expect(user.getUsername()).toBeTruthy();
    });

    it('should get user password', function () {
        expect(user.getPassword()).toBeTruthy();
    });
})
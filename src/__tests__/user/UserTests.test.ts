import {User} from "../../model/User";


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
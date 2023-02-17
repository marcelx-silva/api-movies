import {Request, Response} from "express";
import {UserService} from "../service/UserService";
import {User} from "../model/User";

export class UserController{
    userService:UserService = new UserService();
    async register(request:Request,response:Response){
        const {fullName,username,email,password} = request.body
        console.log('Request Body:\n'+request.body)
        const userRegistered = await this.userService.create(new User(fullName,email,username,password))
        return response.status(201).json(userRegistered);
    }

    async login(request:Request,response:Response){
        const {username,password} = request.body
        const userToken = await this.userService.login({username,password});
        return response.status(200).json(userToken);

    }
}
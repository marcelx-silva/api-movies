import {Router, Request, Response, NextFunction} from "express";
import {UserController} from "../controller/UserController";

export const userRoutes = Router();

const userController:UserController = new UserController();

userRoutes.route(`/user/auth/login`)
    .all((req:Request, res:Response, next:NextFunction)=>{
        res.setHeader('Content-Type','application/json');
        next();
    })
    .post((req:Request, res:Response)=>{
       return userController.login(req,res);
    })
userRoutes.route(`/user/auth/register`)
    .all((req:Request, res:Response, next:NextFunction)=>{
        res.setHeader('Content-Type','application/json');
        next();
    })
    .post((req:Request, res:Response)=>{
        return userController.register(req,res);
    })

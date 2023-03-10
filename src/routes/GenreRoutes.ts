import {Router, Response, NextFunction, Request} from "express";
import {GenreController} from "../controller/GenreController";
import {AuthUserToken} from "../middleware/AuthUserToken";

export const genreRoutes = Router();

const genreController:GenreController = new GenreController();
const authUserToken:AuthUserToken = new AuthUserToken();

genreRoutes.route('/genre')
    .all((req:Request,res:Response,next:NextFunction)=>{
        res.setHeader('Content-Type','application/json');
        authUserToken.authenticateToken(req,res,next);
    })
    .get((req:Request,res:Response)=>{
        return genreController.findAll(req, res);
    })
    .post((req:Request,res:Response)=>{
        return genreController.create(req,res);
    })

genreRoutes.route('/genre/:uuid')
    .all((req:Request,res:Response,next:NextFunction)=>{
        res.setHeader('Content-Type','application/json');
        authUserToken.authenticateToken(req,res,next);
    })
    .get((req:Request,res:Response)=>{
        return genreController.findById(req, res);
    })
    .delete((req:Request,res:Response)=>{
        return genreController.deleteById(req, res);
    })
    .put((req:Request,res:Response)=>{
        return genreController.updateById(req, res);
    })

genreRoutes.route('/genre/name/:name')
    .all((req:Request,res:Response,next:NextFunction)=>{
        res.setHeader('Content-Type','application/json');
        authUserToken.authenticateToken(req,res,next);
    })
    .get((req:Request,res:Response)=>{
        return genreController.findByName(req, res);
    })


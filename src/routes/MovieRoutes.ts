import {Router, Request, Response, NextFunction} from 'express';
import {MovieController} from "../controller/MovieController";
import {AuthUserToken} from "../middleware/AuthUserToken";


export const movieRoutes = Router();

const movieController:MovieController = new MovieController();
const authUserToken:AuthUserToken = new AuthUserToken();
movieRoutes.route('/movie')
    .all((req:Request,res:Response,next:NextFunction)=>{
        res.setHeader('Content-Type','application/json');
        authUserToken.authenticateToken(req,res,next);
    })
    .get((req:Request,res:Response)=>{
        return movieController.findAll(req, res);
    })
    .post((req:Request,res:Response)=>{
        return movieController.create(req,res);
    })

movieRoutes.route('/movie/:uuid')
    .all((req:Request,res:Response,next:NextFunction)=>{
        res.setHeader('Content-Type','application/json');
        authUserToken.authenticateToken(req,res,next);
    })
    .get((req:Request,res:Response)=>{
        return movieController.findById(req, res);
    })
    .delete((req:Request,res:Response)=>{
        return movieController.deleteById(req, res); 
    })
    .put((req:Request,res:Response)=>{
        return movieController.updateById(req, res);
    })

movieRoutes.route('/movie/title/:title')
    .all((req:Request,res:Response,next:NextFunction)=>{
        res.setHeader('Content-Type','application/json');
        authUserToken.authenticateToken(req,res,next);
    })
    .get((req:Request,res:Response)=>{
        return movieController.findByTitle(req, res);
    })
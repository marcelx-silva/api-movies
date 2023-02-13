import {Router, Request, Response, NextFunction} from 'express';
import {MovieController} from "../controller/MovieController";


export const movieRoutes = Router();

const movieController:MovieController = new MovieController();

movieRoutes.route('/movie')
    .all((req:Request,res:Response,next:NextFunction)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        next();
    })
    .get((req:Request,res:Response)=>{
        return movieController.findAll(req, res);
    })
    .post((req:Request,res:Response)=>{
        return movieController.create(req,res);
    })

movieRoutes.route('/movie/:uuid')
    .all((req:Request,res:Response,next:NextFunction)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        next();
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
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        next();
    })
    .get((req:Request,res:Response)=>{
        return movieController.findByTitle(req, res);
    })
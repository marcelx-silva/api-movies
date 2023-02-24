import {NextFunction, Request, Response} from "express";
import jwt, {JwtPayload} from "jsonwebtoken";

export interface CustomRequest extends Request {
    token: string | JwtPayload;
}
export class AuthUserToken{
    authenticateToken(req:Request,res:Response, next:NextFunction){
     try {
         const token = req.headers.authorization

         if (!token){
             throw new Error(`No token`)
         }

         const decoded = jwt.verify(token,`secret`);
         (req as CustomRequest).token = decoded;
         next();
     }catch (err){
         res.status(401).json(`Not authenticated`)
     }
    }
}
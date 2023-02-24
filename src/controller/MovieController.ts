import {Response,Request} from "express";
import {MovieService} from "../service/MovieService";
import {Movie} from "../model/Movie";

const movieService:MovieService = new MovieService();
export class MovieController{
    async findAll(request:Request,response:Response){
        const page:number = parseInt(<string>request.query.page);
        const limit:number = parseInt(<string>request.query.limit);

        const allMovies = await movieService.findAll(page,limit);
        return response.status(200).json(allMovies);
    }

    async findById(request:Request,response:Response):Promise<Response>{
        const uuid:string = <string>request.params.uuid;
        const movieFound = await movieService.findById(uuid);
        return response.json(movieFound);
    }

    async create(request:Request,response:Response){
        const {title,synopsis,language,year,genres} = request.body;
        const movieCreated = await movieService.create(new Movie(title,synopsis,year,language,genres));
        return response.status(200).json(movieCreated);
    }

    async deleteById(request:Request,response:Response){
        const uuid:string = <string>request.params.uuid;
        const movieDeleted = await movieService.deleteById(uuid);
        return response.status(200).json(movieDeleted)
    }

    async updateById(request:Request,response:Response){
        const uuid:string = request.params.uuid
        const {title,synopsis,language,year,genres} = request.body;
        const movieUpdated = await movieService.updateById({uuid,title,synopsis,language,year,genres});
        return response.status(200).json(movieUpdated)
    }

    async findByTitle(request:Request, response:Response) {
        const title:string = <string>request.params.title;
        const movieFound = await movieService.findByTitle(title);
        return response.status(200).json(movieFound)
    }
}
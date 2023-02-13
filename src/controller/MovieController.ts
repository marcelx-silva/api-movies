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
        const movie = await movieService.findById(uuid);
        return response.json(movie);
    }

    async create(request:Request,response:Response){
        const {title,synopsis,language,year,genres} = request.body;
        const movie = await movieService.create(new Movie(title,synopsis,year,language,genres));
        return response.status(200).json(movie);
    }

    async deleteById(request:Request,response:Response){
        const uuid:string = <string>request.params.uuid;
        const allMovies = await movieService.deleteById(uuid);
        return response.status(200).json(allMovies)
    }

    async updateById(request:Request,response:Response){
        const uuid:string = request.params.uuid
        const {title,synopsis,language,year,genres} = request.body;
        const allMovies = await movieService.updateById({uuid,title,synopsis,language,year,genres});
        return response.status(200).json(allMovies)
    }

    async findByTitle(request:Request, response:Response) {
        const title:string = <string>request.params.title;
        const allMovies = await movieService.findByTitle(title);
        return response.status(200).json(allMovies)
    }
}
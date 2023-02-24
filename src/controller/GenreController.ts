import {Request,Response} from "express";
import {GenreService} from "../service/GenreService";
import {Genre} from "../model/Genre";

const genreService:GenreService = new GenreService();
export class GenreController{

    async create(request:Request,response:Response){
        const {name} = request.body
        const genre = await genreService.create(new Genre(name));
        return response.status(201).json(genre);
    }

    async findAll(request:Request,response:Response){
        const page:number = parseInt(<string>request.query.page);
        const limit:number = parseInt(<string>request.query.limit);

        const allGenre = await genreService.findAll(page,limit);
        return response.status(200).json(allGenre);
    }

    async findById(request:Request,response:Response){
        const uuid:string = <string>request.params.uuid;
        const genreFound = await genreService.findById(uuid);
        return response.status(200).json(genreFound);
    }

    async findByName(request:Request,response:Response){
        const name:string = <string>request.params.name;
        const genreFound = await genreService.findByName(name);
        return response.status(200).json(genreFound);
    }

    async deleteById(request:Request,response:Response){
        const uuid:string = <string>request.params.uuid;
        const genreDeleted = await genreService.deleteById(uuid);
        return response.status(200).json(genreDeleted)
    }

    async updateById(request:Request,response:Response){
        const uuid:string = request.params.uuid
        const {name} = request.body;
        const genreUpdated = await genreService.updateById({uuid,name});
        return response.status(200).json(genreUpdated)
    }
}
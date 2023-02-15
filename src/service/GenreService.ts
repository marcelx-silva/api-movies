import {Genre as GenreInterface} from "../interfaces/Genre";
import {prisma} from "../database/prisma";
import {Genre} from "../model/Genre";

export class GenreService{
    async findAll(page:number,limit:number){
        const allGenre = await prisma.genre.findMany({
            skip:page,
            take:limit,
            select:{
                uuid:true,
                name:true,
                id:false
            }
        });

        return allGenre;
    }
    async findById(uuid:string){
        const genreFound = await prisma.genre.findUnique({
            where:{
                uuid:uuid
            },
            select:{
                uuid:true,
                name:true,
                id:false
            }
        })

        return genreFound;
    }
    async findByName(name:string){
        const genreFound = await prisma.genre.findUnique({
            where:{
                name:name
            },
            select:{
                uuid:true,
                name:true,
                id:false
            }
        })
        return genreFound;
    }
    async deleteById(uuid:string){
        const genreDeleted = await prisma.genre.delete({
            where:{
                uuid:uuid
            },
            select:{
                uuid:true,
                name:true,
                id:true
            }
        })

        return genreDeleted;
    }
    async updateById(genre:GenreInterface){
        const genreUpdated = await prisma.genre.update({
            where:{
                uuid:genre.uuid
            },
            data:{
                name:genre.name
            }
        })

        return genreUpdated;
    }

    async create(genre:Genre){
        const genreCreated = await prisma.genre.create({
            data:{
                uuid:genre.getId(),
                name:genre.getName()
            }
        })

        return genreCreated;
    }
}
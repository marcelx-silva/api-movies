import {prisma} from "../database/prisma";
import {Movie} from "../model/Movie";
import {MovieUpdate} from "../interfaces/Movie";
import {MovieNotFound} from "../errors/MovieNotFound";

export class MovieService{
    async findAll(page:number,limit:number){
        const movies =  await prisma.movie.findMany({
            take:limit,
            skip:page,
            select:{
                title: true,
                synopsis: true,
                language: true,
                year: true,
                genres: true,
                uuid: true,
                id:false
            }
        });

        return movies;
    }

    async findById(id:string) {
        const movieFound = await prisma.movie.findFirst({
            where: {
                uuid:id
            },
            select: {
                uuid: true,
                title: true,
                synopsis: true,
                language: true,
                year: true,
                genres: true,
                id: false
            }
        });

        if (movieFound==null)
            throw new MovieNotFound(id);

        return movieFound;
    }

    async create(movie:Movie) {
        const movieCreated = await prisma.movie.create({
            data: {
                title: movie.getTitle(),
                synopsis: movie.getSynopsis(),
                language: movie.getLanguage(),
                year: movie.getYear(),
                genres: movie.getGenres(),
                uuid: movie.getId(),
            }
        });

        return movieCreated;
    }

    async deleteById(id:string) {
        const movieDeleted = await prisma.movie.delete({
            where:{
                uuid:id
            }
        })

        if (movieDeleted==null)
            throw new MovieNotFound(id);

        return movieDeleted;
    }

    async updateById(movie:MovieUpdate) {
        const movieUpdated = await prisma.movie.update({
            where:{
                uuid:movie.uuid
            },
            data:{
                title: movie.title,
                synopsis: movie.synopsis,
                language: movie.language,
                year: movie.year,
                genres: movie.genres,
            }
        })

        if (movieUpdated==null)
            throw new MovieNotFound(movie.uuid);

        return movieUpdated;
    }

    async findByTitle(title: string) {
        const movieFound = await prisma.movie.findUnique({
            where:{
                title:title
            },
            select: {
                uuid: true,
                title: true,
                synopsis: true,
                language: true,
                year: true,
                genres: true,
                id: false
            }
        })

        if (movieFound==null)
            throw new MovieNotFound(title);

        return movieFound;
    }
}

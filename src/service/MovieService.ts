import {prisma} from "../database/prisma";
import {Movie} from "../model/Movie";
import {MovieUpdate} from "../interfaces/Movie";
import {MovieNotFound} from "../errors/MovieNotFound";

export class MovieService{
    async findAll(page:number,limit:number){
        const movies =  await prisma.movie.findMany({
            take:limit,
            skip:page,
            orderBy:{
                title: `asc`
            },
            select:{
                uuid: true,
                title: true,
                synopsis: true,
                language: true,
                year: true,
                genres:{
                    select:{
                        genreName:true,
                    }
                }
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
                genres:{
                    select:{
                        genreName:true,
                    }
                },
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
                uuid: movie.getId(),
                genres: {
                    connectOrCreate: movie.getGenres()?.filter( g => g!=null).map(genre =>{
                        return{
                            where:{ movieName_genreName:{movieName:movie.getYear(),genreName:genre}},
                            create:{genreName:genre}
                        }
                    })
                }
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
                genres: {
                    connectOrCreate: movie.genres.filter( g => g!=null).map(genre =>{
                        return{
                            where:{ movieName_genreName:{movieName:movie.year,genreName:genre}},
                            create:{genreName:genre}
                        }
                    })
                }
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
                genres:{
                    select:{
                        genreName:true,
                    }
                },
                id: false
            }
        })

        if (movieFound==null)
            throw new MovieNotFound(title);

        return movieFound;
    }
}

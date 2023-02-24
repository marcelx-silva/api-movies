import {Movie} from "../Movie";
import {MoviePersistence} from "../../types/MoviePersistence";

export class MovieMapper{
    static toDomain(raw: MoviePersistence){
        const genres: string[] = Array.from(raw.genres ? raw.genres.map(each => each.genreName) : [])
        return new Movie(raw.title,raw.synopsis,raw.year,raw.language,genres,raw.uuid);
    }
}
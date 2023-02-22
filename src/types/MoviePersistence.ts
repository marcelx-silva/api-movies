import {GenreMoviePersistence} from "./GenreMoviePersistence";

export type MoviePersistence = {
    uuid: string;
    title: string;
    year: string;
    language:string;
    synopsis: string;
    genres?: GenreMoviePersistence[]
}

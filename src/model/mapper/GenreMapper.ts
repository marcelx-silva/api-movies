import {GenrePersistence} from "../../types/GenrePersistence";
import {Genre} from "../Genre";

export class GenreMapper{
    static toDomain(raw:GenrePersistence){
        return new Genre(raw.name,raw.uuid);
    }
}
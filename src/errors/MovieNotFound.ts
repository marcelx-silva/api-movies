import {Erro} from "./Error";

export class MovieNotFound extends Erro{
    constructor(movieRequested:string) {
        super("MovieNotFound",`The movie requested was not found\nMovie Requested (uuid/title): ${movieRequested}`);
    }
}
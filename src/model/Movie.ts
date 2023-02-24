import {v4 as uuidv4} from "uuid";

export class Movie{
    private readonly uuid:string;
    private readonly title:string;
    private readonly synopsis:string;
    private readonly year:string;
    private readonly language:string;
    private genres:string[];

    public constructor(title:string,synopsis:string,year:string,language:string,genres:string[],uuid?:string) {
        this.uuid = uuid || uuidv4()
        this.title = title;
        this.synopsis = synopsis;
        this.year = year;
        this.language = language;
        this.genres = genres;
    }


    getTitle(){
        return this.title;
    }

    getId(){
        return this.uuid;
    }

    getGenres(){
        return this.genres;
    }

    getYear(){
        return this.year;
    }

    getLanguage(){
        return this.language;
    }

    getSynopsis(){
        return this.synopsis;
    }


}

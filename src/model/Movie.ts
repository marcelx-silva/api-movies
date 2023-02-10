export class Movie{
    private readonly id?:string;
    private readonly title:string;
    private readonly synopsis:string;
    private readonly year:string;
    private readonly language:string;
    private genres:string[] | undefined;

    public constructor(title:string,synopsis:string,year:string,language:string,genres?:string[]) {
        this.id = "1";
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
        return this.id;
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

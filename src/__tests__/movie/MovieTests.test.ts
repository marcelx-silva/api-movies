class Movie{
    private readonly id?:string;
    private readonly title:string;
    private synopsis:string;
    private year:string;
    private language:string;
    private genres:string[];

    public constructor(title:string,synopsis:string,year:string,language:string,genres:string[]) {
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

describe("Movie Model",()=>{
    it("should generate an ID", async ()=>{
        const movie:Movie = new Movie("Title","Synopsis","2020","Language",["Genre One","Genre Two"]);
       expect(movie.getId()).toBeTruthy();
    });

    it("should get the Movie Title", async ()=>{
        const movie:Movie = new Movie("Title","Synopsis","2020","Language",["Genre One","Genre Two"]);
        expect(movie.getTitle()).toBe("Title");
    });

    it("should get the Movie Synopsis", async ()=>{
        const movie:Movie = new Movie("Title","Synopsis","2020","Language",["Genre One","Genre Two"]);
        expect(movie.getSynopsis()).toBe("Synopsis");
    });

    it("should get the Movie Year", async ()=>{
        const movie:Movie = new Movie("Title","Synopsis","2020","Language",["Genre One","Genre Two"]);
        expect(movie.getYear()).toBe("2020");
    });

    it("should get the Movie Language", async ()=>{
        const movie:Movie = new Movie("Title","Synopsis","2020","Language",["Genre One","Genre Two"]);
        expect(movie.getLanguage()).toBe("Language");
    });

    it("should get the Movie Genres", async ()=>{
        const movie:Movie = new Movie("Title","Synopsis","2020","Language",["Genre One","Genre Two"]);
        expect(movie.getGenres()).toStrictEqual(["Genre One","Genre Two"]);
    });

    it("should contain Genre Two", async ()=>{
        const movie:Movie = new Movie("Title","Synopsis","2020","Language",["Genre One","Genre Two"]);
        expect(movie.getGenres()).toContain("Genre Two");
    });
});
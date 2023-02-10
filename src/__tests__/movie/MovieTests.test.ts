import {Movie} from '../../model/Movie';

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
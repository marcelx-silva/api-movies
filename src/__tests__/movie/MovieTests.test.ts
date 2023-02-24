import {Movie} from '../../model/Movie';

describe("Movie Model",()=>{

    const movie:Movie = new Movie("Title","Synopsis","2020","Language",["Genre One","Genre Two"]);

    it("should generate an ID", async ()=>{
        expect(movie.getId()).toBeTruthy();
    });

    it("should get the Movie Title", async ()=>{
        expect(movie.getTitle()).toBe("Title");
    });

    it("should get the Movie Synopsis", async ()=>{
        expect(movie.getSynopsis()).toBe("Synopsis");
    });

    it("should get the Movie Year", async ()=>{
        expect(movie.getYear()).toBe("2020");
    });

    it("should get the Movie Language", async ()=>{
        expect(movie.getLanguage()).toBe("Language");
    });

    it("should get the Movie Genres", async ()=>{
        expect(movie.getGenres()).toStrictEqual(["Genre One","Genre Two"]);
    });

    it("should contain Genre Two", async ()=>{
        expect(movie.getGenres()).toContain("Genre Two");
    });
});
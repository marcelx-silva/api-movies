import {Genre} from "../../model/Genre";

describe("Genre Model",()=>{

    it('should create an uuid', function () {
        const genreTest:Genre = new Genre("Terror");

        expect(genreTest.getId()).toBeTruthy();
        console.log(genreTest.getId());

    })

    it('should get genre name', function () {
        const genreTest:Genre = new Genre("Terror");

        expect(genreTest.getName().toLowerCase()).toEqual("terror");

    });
})



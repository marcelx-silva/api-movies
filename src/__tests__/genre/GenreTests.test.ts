import {randomUUID} from "crypto";


class Genre{
    private readonly id:string;
    private readonly name:string;

    constructor(name:string) {
        this.id = randomUUID();
        this.name = name;
    }

    getId(){
        return this.id;
    }

    getName(){
        return this.name;
    }
}

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



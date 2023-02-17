import supertest from "supertest";
import {app} from "../../app";
import {prisma} from "../../database/prisma";
import {Movie} from "../../model/Movie";
import {MovieService} from "../../service/MovieService";

describe("Movie Router",  ()=>{

    const movieTest:Movie = new Movie("title","synopsis","2015","language",[]);

    beforeEach(async ()=>{
        await prisma.movie.deleteMany();
        const movieService = new MovieService();
        await movieService.create(movieTest);

    })

    afterEach(async ()=> {
        await prisma.$transaction([prisma.movieGenre.deleteMany(),prisma.movie.deleteMany()])
    })


    it('should get a movie by id', async function () {
        const response = await supertest(app).get(`/movie/${movieTest.getId()}`);
        expect(response.body).toHaveProperty("uuid");
        expect(response.statusType).toBe(2);
    });

    it('should get a movie by title',  async function () {
        const response = await supertest(app).get(`/movie/title/${movieTest.getTitle()}`)
        expect(response.statusType).toBe(2);
    });


    it('should delete a movie by id', async function () {
        const response = await supertest(app).del(`/movie/${movieTest.getId()}`);
        console.log(response.body)
    });

    it('should create a movie', async function () {
        const response = await supertest(app)
            .post('/movie')
            .send({title:"title2",synopsis:"synopsis",language:"language",year:"2015",genres:[]})

        expect(response.statusCode).toBe(200);
        expect(response.statusType).toBe(2);
    });

    it('should update a movie by id', async function () {
        const response = await supertest(app)
            .put(`/movie/${movieTest.getId()}`)
            .send({title:"title",synopsis:"synopsis",language:"language",year:"2015",genres:[]})
        expect(response.statusType).toBe(2);

    });
})




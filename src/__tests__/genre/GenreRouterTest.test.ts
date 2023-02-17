import request from 'supertest';
import {prisma} from "../../database/prisma";
import {Genre} from "../../model/Genre";
import {app} from "../../app";
import {randomUUID} from "crypto";

describe('Genre Router Tests',  () =>{

    const genreTest:Genre = new Genre('Comedi')

    beforeEach(async ()=>{
        await prisma.$transaction([prisma.genre.createMany({
            data:[
                {name:`Terror`,uuid:randomUUID()},
                {name:`Aventura`,uuid:randomUUID()},
                {name:`Musical`,uuid:randomUUID()},
                {name:genreTest.getName(),uuid:genreTest.getId()}
            ]
        })])
    })

    afterEach(async ()=>{
        await prisma.$transaction([prisma.genre.deleteMany({})])
    })

    it('should get a genre by id', async function () {
        const response = await request(app).get(`/genre/${genreTest.getId()}`)
        expect(response.body).toHaveProperty(`uuid`)
        expect(response.statusType).toBe(2)
        expect(response.body.uuid).toEqual(genreTest.getId())
        console.log(response.body)
    });

    it('should get a genre by name', async function () {
        const response = await request(app).get(`/genre/name/${genreTest.getName()}`)
        expect(response.statusType).toBe(2)
        expect(response.body.name).toEqual(genreTest.getName())
    });

    it('should get all genres', async function () {
        const limit:number = 5;
        const page:number = 0;

        const response = await request(app).get(`/genre?page=${page}&limit=${limit}`)
        console.log(response.body)
    });

    it('should create a genre', async function () {
        const response = await request(app).post(`/genre`).send({name:`GenreTest`});
        expect(response.statusType).toBe(2);
        console.log(response.body.uuid)
    });

    it('should delete a genre by id', async function () {
        const response = await request(app).delete(`/genre/${genreTest.getId()}`);
        expect(response.statusType).toBe(2);
        console.log(response.body)
    });

    it('should update a genre by id', async function () {
        const response = await request(app).put(`/genre/${genreTest.getId()}`).send({name:`Comedia`});
        expect(response.statusType).toBe(2);
    });

    it('should not create a existing genre', async function () {
        const response = await request(app).post(`/genre`).send({name:`Terror`});
        //TODO: Create GenreAlreadyExistsException()
    });


});
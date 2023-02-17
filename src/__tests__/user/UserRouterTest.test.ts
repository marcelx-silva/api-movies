import request from "supertest";
import {app} from "../../app";

describe(`User Router`,()=>{
    it('should create an user', async function () {
        const response = await request(app).post(`/user/auth/register`).send({
            fullName:'Nome Completo',
            username:'usuario',
            email:'usuario@gmail.com',
            password:'usuarioSenha'
        })

        expect(response.statusType).toBe(2);
        expect(response.body).toHaveProperty(`uuid`)
    });

    it('should login user', async function () {
        const response = await request(app).post(`/user/auth/login`).send({
            username:'usuario',
            password:'usuarioSenha'
        })

        expect(response.statusType).toBe(2);
        console.log(response)
    });
})
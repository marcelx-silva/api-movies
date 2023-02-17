import {User} from "../model/User";
import {prisma} from "../database/prisma";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'

export class UserService{

    async create(user: User) {
        const userPass:string = await bcrypt.hash(user.getPassword(), 8);

        const userCreated = await prisma.user.create({
            data: {
                uuid:user.getId(),
                fullName:user.getFullName(),
                username:user.getUsername(),
                email:user.getEmail(),
                password: userPass
            }
        })

        return userCreated;
    }

    async login(userLogin:{ password: string; username: string }) {
        console.log(userLogin.username)
        const user = await prisma.user.findUnique({
            where:{
                username:userLogin.username
            }
        })
        console.log(user)
        if (!user)
            throw new Error(`User does not exists`);

        const isMatch = bcrypt.compare(userLogin.password,user.password)
        console.log(isMatch)
        if (!isMatch)
            throw new Error(`User does not exists`);

        const token = jwt.sign({ _id: user.id?.toString(), name: user.username }, `secret`, {
            expiresIn: '2 days',
        });
        console.log(token)
        return token;

    }
}
import {v4 as uuid} from "uuid";

export class Genre{
    private readonly id:string;
    private readonly name:string;

    constructor(name:string) {
        this.id = uuid();
        this.name = name;
    }

    getId(){
        return this.id;
    }

    getName(){
        return this.name;
    }
}

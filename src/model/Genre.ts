import {v4 as uuidv4} from "uuid";

export class Genre{
    private readonly uuid:string;
    private readonly name:string;

    constructor(name:string,uuid?:string) {
        this.uuid = uuid || uuidv4();
        this.name = name;
    }

    getId(){
        return this.uuid;
    }

    getName(){
        return this.name;
    }
}

export class Erro{
    private readonly message:string;
    private readonly name:string;
    constructor(name:string,message:string) {
        this.message = message;
        this.name = name;
    }
}
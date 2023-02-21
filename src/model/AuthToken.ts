export class AuthToken{
    private readonly token:string;
    private readonly tokenDuration:number;

    public constructor(token:string, tokenDuration:number) {
        this.token = token;
        this.tokenDuration = tokenDuration;
    }
}
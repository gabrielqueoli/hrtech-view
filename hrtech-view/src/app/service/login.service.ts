import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable (
    {
        providedIn: "root"
    }
)

export class LoginService {

    public apiUrl = 'https://hrtech-api-production.up.railway.app/'

    constructor( private httpClient : HttpClient ) {

    }

    LoginUsuario(objeto: any) 
    {
        return this.httpClient.post<any>(`${this.apiUrl} hrtech-api-production.up.railway.app/usuario/lista/pelo-nome`, objeto);
    }
}
import { Injectable } from "@angular/core";
import { Personaje } from "../Interfaces/dbz.Interfaces";

@Injectable()
export class DbzService {
    
    personajes: Personaje[] = [
        {
          nombre: 'Goku',
          poder: 15000
        },
        {
          nombre: 'Vegeta',
          poder: 85000
        },
        {
          nombre: 'Krillin',
          poder: 1000
        }
    ];

    constructor() {
        console.log('Servicio inicializado');
    }


}
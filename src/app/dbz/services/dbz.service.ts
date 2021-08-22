import { Injectable } from "@angular/core";
import { Personaje } from '../Interfaces/dbz.Interfaces';

@Injectable()
export class DbzService {
    
    private _personajes: Personaje[] = [
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

    get personajes(): Personaje[] {
      return [...this._personajes];
      // return this.personajes;
    }
    constructor() { }

    agregarPersonaje( personaje: Personaje ) {
      this._personajes.push(personaje);
    }
}
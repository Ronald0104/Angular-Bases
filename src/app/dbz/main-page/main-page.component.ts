import { Component, OnInit } from '@angular/core';
import { Personaje } from '../Interfaces/dbz.Interfaces';
import { DbzService } from '../services/dbz.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  // personajes: Personaje[] = [];

  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1000
  }

  get personajes(): Personaje[] {
    return this.dbzService.personajes;
  }


  // cambiarNombre(event: any) {
  //   console.log(event.target.value);
  // }
  
  agregarNuevoPersonaje( argumento: Personaje ) {
    console.log(argumento);
    // debugger;
    this.personajes.push(argumento);
  }

  constructor(private dbzService: DbzService) {
    // this.personajes = this.dbzService.personajes;
  }
  // constructor() {}
}

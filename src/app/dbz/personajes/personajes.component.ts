import { Component, Input } from '@angular/core';
import { MainPageComponent } from '../main-page/main-page.component';
import { Personaje } from '../Interfaces/dbz.Interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {

  // @Input() personajes: Personaje[] = [];
  get personajes() {
    return this.dbzService.personajes;
    // const personajesCopia = this.dbzService.personajes;
    // personajesCopia.push({ nombre: 'Otro', poder: 200});
    // return personajesCopia;
  }
  constructor(private dbzService: DbzService){ }
}

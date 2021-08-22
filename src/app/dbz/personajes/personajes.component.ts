import { Component, Input } from '@angular/core';
import { MainPageComponent } from '../main-page/main-page.component';
import { Personaje } from '../Interfaces/dbz.Interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {

  @Input() personajes: Personaje[] = [];

  constructor(
    private dbzService: DbzService
  ){
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman','Hulk','Thor','Capi']
  heroeBorrado: string = '';

  borrarHeroe():void {
    // this.heroes.splice(0,1);
    // this.heroes.splice(this.heroes.length-1, 1);
    this.heroeBorrado = this.heroes.shift() || '';
    // let [heroeBorrado, ...others] = this.heroes;
    // this.heroes = others;
  }
}

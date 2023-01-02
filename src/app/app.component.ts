import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Aula de Services</h1>
  <app-card></app-card>
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projectPokemon';
}

import { Component } from '@angular/core';

@Component({
  selector: 'favorites-list',
  templateUrl: 'app/views/favoriteslist.component.html'
})

export class FavoritesListComponent {
  title: string;

  constructor() {
    this.title = 'Lista de Favoritos';
   }
}
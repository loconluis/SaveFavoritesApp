import { Component } from '@angular/core';

@Component({
  selector: 'favorites-list',
  templateUrl: 'app/views/favoriteslist.component.html'
})

export class FavoritesListComponent {
  title: string;
  favoritos: Array<string>;
  flag : boolean;

  constructor() {
    this.title = 'Lista de Favoritos';
    this.favoritos = ['loconluis.github.io', 'google.com', 'twitter.com/loconluis', 'youtube.com'];
    this.flag = false;
   }

   changeState() {
     if(this.flag) {
       this.flag = false;
     } else {
       this.flag = true;
     }
   }
}
import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '../services/favorite.service';
import { Favorite } from '../models/favorites.model';

@Component({
  selector: 'favorites-list',
  templateUrl: 'app/views/favoriteslist.component.html'
})

export class FavoritesListComponent implements OnInit{
  title: string;
  errorMessage: any;

  constructor(private favoriteService : FavoriteService) {
    this.title = 'Lista de Favoritos';
   }

   ngOnInit() {
     console.log('Favoriteslistcomponent cargado');
     this.favoriteService.allFavorites()
      .subscribe(result => {
        console.log(result);
        
      }, err => {
        // error
        this.errorMessage = <any>err;
        if (this.errorMessage != null) {
          console.log(this.errorMessage);
          alert('Error en la peticion');
        }
      })
   }
}
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { FavoriteService } from '../services/favorite.service';
import { Favorite } from '../models/favorites.model';

@Component({
  selector: 'favorites-list',
  templateUrl: 'app/views/favoriteslist.component.html'
})

export class FavoritesListComponent implements OnInit{
  title: string;
  favorites: Favorite[];
  errorMessage: any;
  loading: boolean;

  constructor(private favoriteService : FavoriteService) {
    this.title = 'Lista de Favoritos';
    this.loading = true;
   }

   ngOnInit() {
     this.favoriteService.allFavorites()
      .subscribe(result => {
        // console.log(result.favs);
        this.favorites = result.favs;

        if (!this.favorites) {
          alert('error en el servidor');
        }else {
          this.loading = false;
        }
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
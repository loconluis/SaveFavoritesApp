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
  flagToDelete: any;

  constructor(private favoriteService : FavoriteService) {
    this.title = 'Lista de Favoritos';
    this.loading = true;
   }

   ngOnInit() {
     this.allFavorites();
   }

   allFavorites() {
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

   onDeleteConfirm(id) {
     this.flagToDelete = id;
   }

   onCancelConfirm(id) {
    this.flagToDelete = null;
   }

   onDeleteFavorite(id) {
     this.favoriteService.deleteFavorite(id)
      .subscribe(response => {
        if(!response.message) {
          alert('Error en la peticion')
        }
        this.allFavorites();

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
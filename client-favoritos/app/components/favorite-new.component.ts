import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { FavoriteService } from '../services/favorite.service';
import { Favorite } from '../models/favorites.model';

@Component({
  selector: 'favorite-new',
  templateUrl: 'app/views/favorite-new.component.html'
})

export class FavoriteNewComponent implements OnInit {
  bigtitle: string;
  favorite: Favorite;

  constructor(private favoriteService: FavoriteService) {
    this.bigtitle = 'Nuevo Favorito'
  }

  ngOnInit() {
    this.favorite = new Favorite("", "", "")
    console.log(this.favorite);
    
  }

  onSubmit() {
    console.log(this.favorite)
  }
}
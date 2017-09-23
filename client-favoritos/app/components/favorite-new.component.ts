import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { FavoriteService } from '../services/favorite.service';
import { Favorite } from '../models/favorites.model';

@Component({
  selector: 'favorite-new',
  templateUrl: 'app/views/favorite-new.component.html'
})

export class FavoriteNewComponent implements OnInit {
  constructor(private favoriteService: FavoriteService) { }

  ngOnInit() { }
}
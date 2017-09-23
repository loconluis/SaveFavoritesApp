import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { FavoriteService } from '../services/favorite.service';
import { Favorite } from '../models/favorites.model';

@Component({
  selector: 'favorite-new',
  templateUrl: 'app/views/favorite-new.component.html'
})

export class FavoriteNewComponent implements OnInit {
  errorMessage: any;
  bigtitle: string;
  favorite: Favorite;

  constructor(private favoriteService: FavoriteService,
              private route: ActivatedRoute,
              private router: Router
            ) {
    this.bigtitle = 'Nuevo Favorito'
  }

  ngOnInit() {
    this.favorite = new Favorite("", "", "", "")
    // console.log(this.favorite);
  }

  onSubmit() {
    // console.log(this.favorite)
    this.favoriteService.saveFavorite(this.favorite)
      .subscribe(response => {
        //success
        // console.log(response);
        if (!response.favorite) {
          alert('Error en el servidor');
        } else {
          this.favorite = response.favorite;
          this.router.navigate(['/marcador/', this.favorite._id])
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
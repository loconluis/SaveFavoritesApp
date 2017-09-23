import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { FavoriteService } from '../services/favorite.service';
import { Favorite } from '../models/favorites.model';

@Component({
  selector: 'favorite-edit',
  templateUrl: 'app/views/favorite-new.component.html'
})

export class FavoriteEditComponent implements OnInit {
  errorMessage: any;
  bigtitle: string;
  favorite: Favorite;

  constructor(private favoriteService: FavoriteService,
              private route: ActivatedRoute,
              private router: Router
            ) {
    this.bigtitle = 'Editar Favorito'
  }

  ngOnInit() {
    this.favorite = new Favorite("", "", "", "")
    this.getFavorite();
  }

  getFavorite() {
    this.route.params.forEach((params: Params)=> {
      let id = params['id'];

      // inyectamos el servicio
      this.favoriteService.getFavorite(id)
        .subscribe(response => {
          // console.log(response.fav);
          this.favorite = response.fav;
          // si no existe el favorito regresa al HOME
          if(!this.favorite) {
            this.router.navigate(['/']);
          }

        }, err => {
          this.errorMessage = <any>err;
          if (this.errorMessage != null) {
            console.log(this.errorMessage);
            alert('Error en la peticion');
          }
        })
    })
  }

  onSubmit() {
    // console.log(this.favorite)
    this.route.params.forEach((params: Params)=> {
      let id = params['id'];
      this.favoriteService.updateFavorite(id, this.favorite)
        .subscribe(response => {
          //success
          if (!response.favUpdate) {
            alert('Error en el servidor');
          } else {
            this.favorite = response.favUpdate;
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
    })
  }
}
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FavoriteService } from '../services/favorite.service';
import { Favorite } from '../models/favorites.model';

@Component({
  selector: 'favorite-detail',
  templateUrl: 'app/views/favorite-details.component.html'
})

export class FavoriteDetailComponent implements OnInit {
  favorite: Favorite;
  errorMessage: any;
  constructor(private favoriteService: FavoriteService,
      private route: ActivatedRoute,
      private router: Router) { }

  ngOnInit() {
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
}
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Favorite } from '../models/favorites.model';

@Injectable()
export class FavoriteService {
  url: string;

  constructor(private http: Http) {
    // pasamos la URL de donde se conecta al servidor HTTP
    this.url = 'http://localhost:3200/api/'
  }

  // lista todos los favoritos por get
  allFavorites() {
    return this.http.get(this.url+'favoritos')
      .map(res => res.json())
  }

  // devuelve solo un favorito por id por get
  getFavorite(id:string) {
    return this.http.get(this.url+'favorito/'+id)
      .map(res => res.json())
  }

  // envia datos de un favorito por post
  saveFavorite(favorite: Favorite) {
    let json = JSON.stringify(favorite);
    let params = json;
    let headers = new Headers({'Content-Type' : 'application/json'});

    return this.http.post(this.url+'/favorito', params, { headers: headers })
      .map(res => res.json())
  }
  
}
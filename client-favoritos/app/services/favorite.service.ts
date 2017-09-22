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

  allFavorites() {
    return this.http.get(this.url+'favoritos')
      .map(res => res.json())
  }
  
}
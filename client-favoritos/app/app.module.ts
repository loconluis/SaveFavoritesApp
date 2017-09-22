import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { FavoritesListComponent } from './components/favoriteslist.component';
import { HttpModule, JsonpModule } from '@angular/http';
import { FavoriteService } from './services/favorite.service';
import { appRoutingProviders, routing } from './app.routing';
import { FavoriteDetailComponent } from './components/favorite-details.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    HttpModule,
    routing
   ],
  declarations: [ 
    AppComponent, 
    FavoritesListComponent,
    FavoriteDetailComponent
  ],
  providers: [
    FavoriteService,
    appRoutingProviders
  ],
  bootstrap: [ AppComponent ]
})
 
export class AppModule { }

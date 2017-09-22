import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { FavoritesListComponent } from './components/favoriteslist.component';
import { HttpModule, JsonpModule } from '@angular/http';
import { FavoriteService } from './services/favorite.service';

@NgModule({
  imports:      [ 
    BrowserModule,
    HttpModule
   ],
  declarations: [ 
    AppComponent, 
    FavoritesListComponent
  ],
  providers: [
    FavoriteService
  ],
  bootstrap:    [ AppComponent ]
})
 
export class AppModule { }

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { FavoritesListComponent } from './components/favoriteslist.component';
import { HttpModule, JsonpModule } from '@angular/http';
import { FavoriteService } from './services/favorite.service';
import { appRoutingProviders, routing } from './app.routing';
import { FavoriteDetailComponent } from './components/favorite-details.component';
import { FavoriteNewComponent } from './components/favorite-new.component';
import { FavoriteEditComponent } from './components/favorite-edit.component';


@NgModule({
  imports:      [ 
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
   ],
  declarations: [ 
    AppComponent, 
    FavoritesListComponent,
    FavoriteDetailComponent,
    FavoriteNewComponent,
    FavoriteEditComponent
  ],
  providers: [
    FavoriteService,
    appRoutingProviders
  ],
  bootstrap: [ AppComponent ]
})
 
export class AppModule { }

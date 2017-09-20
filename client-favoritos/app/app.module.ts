import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { FavoritesListComponent } from './components/favoriteslist.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
    AppComponent, 
    FavoritesListComponent
  ],
  bootstrap:    [ AppComponent ]
})
 
export class AppModule { }

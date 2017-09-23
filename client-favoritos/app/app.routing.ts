// archivo de rutas de la aplicacion
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// importacion de componentes
import { FavoritesListComponent } from './components/favoriteslist.component';
import { FavoriteDetailComponent } from './components/favorite-details.component';
import { FavoriteNewComponent } from './components/favorite-new.component';
import { FavoriteEditComponent } from './components/favorite-edit.component';

const routes: Routes = [
  // json con las rutas, y el componente que va a renderear
  { path: '', component: FavoritesListComponent },
  { path: 'marcador/:id', component: FavoriteDetailComponent },
  { path: 'nuevo', component: FavoriteNewComponent },
  { path: 'marcador/editar/:id', component: FavoriteEditComponent },
  { path: '**', component: FavoritesListComponent },
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
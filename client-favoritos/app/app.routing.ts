// archivo de rutas de la aplicacion
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// importacion de componentes
import { FavoritesListComponent } from './components/favoriteslist.component';
import { FavoriteDetailComponent } from './components/favorite-details.component';

const routes: Routes = [
  { path: '', component: FavoritesListComponent },
  { path: 'marcador/:id', component: FavoriteDetailComponent },
  { path: '**', component: FavoritesListComponent },
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
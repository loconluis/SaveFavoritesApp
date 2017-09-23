// Importar Component desde el núcleo de Angular
import {Component} from '@angular/core';
 
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'my-app',
    templateUrl: 'app/views/home.component.html'
})
 
// Clase del componente donde irán los datos y funcionalidades
export class AppComponent { 
    titulo: string;
    description: string;

    constructor(){
        this.titulo = 'APP FAVORITOS';
        this.description = 'Aplicacion web SPA con Angular 2 para gestionar Favoritos Online';
    }
}

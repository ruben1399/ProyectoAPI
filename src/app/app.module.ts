import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ListadoCategoriasComponent } from './component/listado-categorias/listado-categorias.component';
import { BuscadorComponent } from './component/buscador/buscador.component';
import { FormsModule } from '@angular/forms';
import { EditarCategoriaComponent } from './component/editar-categoria/editar-categoria.component';
import { CrearCategoriaComponent } from './component/crear-categoria/crear-categoria.component';
import { ContactoComponent } from './component/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoCategoriasComponent,
    BuscadorComponent,
    EditarCategoriaComponent,
    CrearCategoriaComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

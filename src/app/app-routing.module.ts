import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscadorComponent } from './component/buscador/buscador.component';
import { ContactoComponent } from './component/contacto/contacto.component';
import { CrearCategoriaComponent } from './component/crear-categoria/crear-categoria.component';
import { EditarCategoriaComponent } from './component/editar-categoria/editar-categoria.component';
import { ListadoCategoriasComponent } from './component/listado-categorias/listado-categorias.component';

const routes: Routes = [
  {
    path: '',
    component: BuscadorComponent

   },
   {
     path: 'editar/:id',
     component: EditarCategoriaComponent
   },
   {
    path: 'eliminar/:id',
    component: BuscadorComponent
  },
  {
    path: 'add',
    component: CrearCategoriaComponent
  },
  {
    path: 'contacto',
    component: ContactoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}

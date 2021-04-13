import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscadorComponent } from './component/buscador/buscador.component';
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
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}

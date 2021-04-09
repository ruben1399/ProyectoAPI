import { Component, OnInit } from '@angular/core';
import { Categorias } from 'src/app/interfaces/categorias';
import { CategoriasService } from 'src/app/services/categorias.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent implements OnInit {
  id: number;
  nombre:string;
resultadoBusq: Categorias
bExito= false;
  constructor(private categorias: CategoriasService) { }

  ngOnInit(): void {
  }
   async submit (){
    this.resultadoBusq= await this.categorias.getCategoryName(this.nombre);
    if(this.resultadoBusq[0].name == this.nombre){
      this.bExito=true;
    }
    
  }

  async eliminar (){
    await this.categorias.deleteCategory(this.resultadoBusq[0].id);
    if(this.resultadoBusq[0].id == this.id){
      this.bExito=true;
    }
    
  }
}

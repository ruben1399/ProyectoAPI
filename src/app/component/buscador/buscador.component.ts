import { Component, OnInit } from '@angular/core';
import { Categorias } from 'src/app/interfaces/categorias';
import { CategoriasService } from 'src/app/services/categorias.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent implements OnInit {
nombre:string;
resultadoBusq: Categorias
  constructor(private categorias: CategoriasService) { }

  ngOnInit(): void {
  }
   async submit (){
    this.resultadoBusq= await this.categorias.getCategoryName(this.nombre);
    console.log(this.resultadoBusq)
  }
}

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
  nombre: string;
  resultadoBusq: Categorias;
  bExito = false;
  bRecarga=false;
  constructor(private categorias: CategoriasService) { }

  ngOnInit(): void {
  }
  async submit() {
    this.bRecarga=false;
    this.resultadoBusq = await this.categorias.getCategoryName(this.nombre);
    if (this.resultadoBusq[0].name == this.nombre) {
      this.bExito = true;
    }

  }

  async eliminar(resultBusq: Number) {
    
    await this.categorias.deleteCategory(resultBusq);
    this.resultadoBusq[0]= await this.categorias.getAllCategories();
    this.bRecarga=true;
    

  }

}

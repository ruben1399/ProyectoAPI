import { Component, OnInit } from '@angular/core';
import { Categorias } from 'src/app/interfaces/categorias';
import { CategoriasService } from 'src/app/services/categorias.service';

@Component({
  selector: 'app-crear-categoria',
  templateUrl: './crear-categoria.component.html',
  styleUrls: ['./crear-categoria.component.scss']
})
export class CrearCategoriaComponent implements OnInit {
categoria: Categorias= {
  name:'',
  description:''
};


  constructor(private sCategorias: CategoriasService) { }

  ngOnInit(): void {

  }
  async crearCategoria():Promise<void> {
    await this.sCategorias.addCategory(this.categoria);
  }
  async submit(): Promise<void> {
    console.warn(await this.sCategorias.addCategory(this.categoria));
  }
}

import { Component, OnInit } from '@angular/core';
import { Categorias } from 'src/app/interfaces/categorias';
import { CategoriasService } from 'src/app/services/categorias.service';

@Component({
  selector: 'app-listado-categorias',
  templateUrl: './listado-categorias.component.html',
  styleUrls: ['./listado-categorias.component.scss']
})
export class ListadoCategoriasComponent implements OnInit {
arrayCategories: Categorias[];
  constructor(private sCategorias: CategoriasService) { }

  async ngOnInit(): Promise<void> {
    this.arrayCategories= await this.sCategorias.getAllCategories();
  }

}

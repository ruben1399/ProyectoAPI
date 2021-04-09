import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categorias } from 'src/app/interfaces/categorias';
import { CategoriasService } from 'src/app/services/categorias.service';

@Component({
  selector: 'app-editar-categoria',
  templateUrl: './editar-categoria.component.html',
  styleUrls: ['./editar-categoria.component.scss']
})
export class EditarCategoriaComponent implements OnInit {
  @Input() categoria: Categorias;
  loading=true;


  constructor(
    private activate: ActivatedRoute,
    private service: CategoriasService
  ) { }

  async ngOnInit(): Promise<void> {
    console.log(this.categoria);
    this.categoria= await this.service.getCategory(this.activate.snapshot.paramMap['params']['id']);
    this.loading=false;
    

  }

}

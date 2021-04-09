import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Categorias } from '../interfaces/categorias';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private http: HttpClient) {

  }

  async getAllCategories(): Promise<Categorias[]> {
    return await this.http.get<Categorias[]>(environment.apiurl).toPromise();

  }
  async getCategory(id: number): Promise<Categorias> {
    let categoria = await this.http.get<Categorias>(environment.apiurl + '/' + id).toPromise();
    return categoria;
  }
  async getCategoryName(name: string): Promise<Categorias> {
    let categoria = await this.http.get<Categorias>(environment.apiurl + '/?name=' + name).toPromise();
    return categoria;
  }
  async updateCategory(category: Categorias): Promise<Categorias> {
    return await this.http.patch<Categorias>(environment.apiurl + category.id, category).toPromise();
  }
  async deleteCategory(category: Categorias): Promise<void> {
    await this.http.delete<Categorias>(environment.apiurl + '/' + category.id).toPromise();
  }
}


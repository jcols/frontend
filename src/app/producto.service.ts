import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from './producto';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root',
})

export class ProductoService {

  constructor(private http: HttpClient) {
    }

    get() {
      return this.http.get<Producto[]>(environment.apiUrl + '/products/');

  }

  new(producto: Producto) {
    return this.http.post<Producto>(environment.apiUrl + '/products/', producto);
  }

  getById(id: number) {
    return this.http.get<Producto>(environment.apiUrl + `/products/ver/${id}`);
   }

   update(producto: Producto){
    return this.http.put(environment.apiUrl + `/products/edit/`,producto);
   }

   delete(id:number){
    return this.http.delete<Producto>(environment.apiUrl + `/products/delete/${id}`);
 }
}

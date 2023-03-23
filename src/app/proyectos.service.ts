import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';
import { Proyectos } from './proyectos';

@Injectable({
  providedIn: 'root',
})

export class ProyectosService {

  constructor(private http: HttpClient) {
    }

    get() {
      return this.http.get<Proyectos[]>(environment.apiUrl + '/proyectos/');

  }

  new(proyectos: Proyectos) {
    return this.http.post<Proyectos>(environment.apiUrl + '/proyectos/', proyectos);
  }

  getById(id: number) {
    return this.http.get<Proyectos>(environment.apiUrl + `/proyectos/ver/${id}`);
   }

   update(proyectos: Proyectos){
    return this.http.put(environment.apiUrl + `/proyectos/edit/`, proyectos);
   }

   delete(id:number){
    return this.http.delete<Proyectos>(environment.apiUrl + `/proyectos/delete/${id}`);
 }
}

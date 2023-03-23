import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';
import { Educacion } from '../app/educacion';

@Injectable({
  providedIn: 'root',
})

export class EducacionService {

  constructor(private http: HttpClient) {
    }

    get() {
      return this.http.get<Educacion[]>(environment.apiUrl + '/educacion/');

  }

  new(educacion: Educacion) {
    return this.http.post<Educacion>(environment.apiUrl + '/educacion/', educacion);
  }

  getById(id: number) {
    return this.http.get<Educacion>(environment.apiUrl + `/educacion/ver/${id}`);
   }

   update(educacion: Educacion){
    return this.http.put(environment.apiUrl + `/educacion/edit/`, educacion);
   }

   delete(id:number){
    return this.http.delete<Educacion>(environment.apiUrl + `/educacion/delete/${id}`);
 }
}

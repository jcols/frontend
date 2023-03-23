import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';
import { Idioma } from './idioma';

@Injectable({
  providedIn: 'root',
})

export class IdiomaService {

  constructor(private http: HttpClient) {
    }

    get() {
      return this.http.get<Idioma[]>(environment.apiUrl + '/idiomas/');

  }

  new(idioma: Idioma) {
    return this.http.post<Idioma>(environment.apiUrl + '/idiomas/', idioma);
  }

  getById(id: number) {
    return this.http.get<Idioma>(environment.apiUrl + `/idiomas/ver/${id}`);
   }

   update(idioma: Idioma){
    return this.http.put(environment.apiUrl + `/idiomas/edit/`, idioma);
   }

   delete(id:number){
    return this.http.delete<Idioma>(environment.apiUrl + `/idiomas/delete/${id}`);
 }
}

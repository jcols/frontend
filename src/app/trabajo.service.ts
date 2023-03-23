import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';
import { Trabajo } from './trabajo';

@Injectable({
  providedIn: 'root',
})

export class TrabajoService {

  constructor(private http: HttpClient) {
    }

    get() {
      return this.http.get<Trabajo[]>(environment.apiUrl + '/trabajo/');

  }

  new(trabajo: Trabajo) {
    return this.http.post<Trabajo>(environment.apiUrl + '/trabajo/', trabajo);
  }

  getById(id: number) {
    return this.http.get<Trabajo>(environment.apiUrl + `/trabajo/ver/${id}`);
   }

   update(trabajo: Trabajo){
    return this.http.put(environment.apiUrl + `/trabajo/edit/`, trabajo);
   }

   delete(id:number){
    return this.http.delete<Trabajo>(environment.apiUrl + `/trabajo/delete/${id}`);
 }
}

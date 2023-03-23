import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { About } from './about';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root',
})

export class AboutService {

  constructor(private http: HttpClient) {
    }

    get() {
      return this.http.get<About[]>(environment.apiUrl + '/about/');

  }
  getById(id: number) {
    return this.http.get<About>(environment.apiUrl + `/about/ver/${id}`);
   }
   update(about: About){
    return this.http.put(environment.apiUrl + `/about/edit/`,about);
   }

}

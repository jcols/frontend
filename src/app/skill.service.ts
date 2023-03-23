import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';
import { Skill } from './skill';

@Injectable({
  providedIn: 'root',
})

export class SkillService {

  constructor(private http: HttpClient) {
    }

    get() {
      return this.http.get<Skill[]>(environment.apiUrl + '/skills/');

  }

  new(skill: Skill) {
    return this.http.post<Skill>(environment.apiUrl + '/skills/', skill);
  }

  getById(id: number) {
    return this.http.get<Skill>(environment.apiUrl + `/skills/ver/${id}`);
   }

   update(skill: Skill){
    return this.http.put(environment.apiUrl + `/skills/edit/`, skill);
   }

   delete(id:number){
    return this.http.delete<Skill>(environment.apiUrl + `/skills/delete/${id}`);
 }
}

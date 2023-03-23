import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationClient {
  constructor(private http: HttpClient) {}

  public login(email: string, password: string): Observable<string> {
    return this.http.post(
      environment.apiUrl + '/auth/login',
      {
        email: email,
        password: password,
      },
      { responseType: 'text' }
    );
  }

/*
public login(email: string, password: string): Observable<Result<string>> {
  return this.http.post<Result<string>>(environment.apiUrl + '/auth/login', {
    email: email,
    password: password,
  });
}*/
  public register(
    email: string,
    password: string
  ): Observable<string> {
    return this.http.post(
      environment.apiUrl + '/user/register',
      {
        email: email,
        password: password,
      },
      { responseType: 'text' }
    );
  }
}

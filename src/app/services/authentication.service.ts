import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationClient } from '../clients/authentication.client';
import {HttpErrorResponse} from "@angular/common/http";
import jwtDecode from "jwt-decode";
import {Result} from '../models/result.model';
import {User} from '../models/user.model';
import {Claims} from '../models/claims.enum';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private tokenKey = 'token';
  public showError: boolean = false;
  //private userKey = 'user';

  constructor(
    private authenticationClient: AuthenticationClient,
    private router: Router
  ) {}
/*
  public login(email: string, password: string): void {
    this.authenticationClient.login(email, password).subscribe((token) => {
      let jsontoken = JSON.parse(token);
      localStorage.setItem(this.tokenKey, jsontoken.accessToken);
      console.log("Data: "+jsontoken.accessToken);
      this.router.navigate(['/privado']);
    });
  }
*/
  public login(email: string, password: string) {
    return this.authenticationClient.login(email, password).subscribe({
      next: (token) => {
        let jsontoken = JSON.parse(token);
        localStorage.setItem(this.tokenKey, jsontoken.accessToken);
        const decodedToken = jwtDecode<any>(jsontoken.accessToken);
        console.log(decodedToken);
        this.router.navigate(['/privado']);
      },
      error: (error) => {
       // this.handleFailedAuthentication(error);
       //this.showError = true;
       console.log(error);
       alert("Email o clave incorrectos");
      }
    })
  };

  public register(email: string, password: string): void {
    this.authenticationClient
      .register(email, password)
      .subscribe((token) => {
        localStorage.setItem(this.tokenKey, token);
        this.router.navigate(['/privado']);
      });
  }

  public logout() {
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/']);
  }

  public isLoggedIn(): boolean {
    let token = localStorage.getItem(this.tokenKey);
    return token != null && token.length > 0;
  }

  public getToken(): string | null {
    return this.isLoggedIn() ? localStorage.getItem(this.tokenKey) : null;
  }
/*
  private handleSuccessAuthentication(result: Result<string>): void {
    let message;

    if (result !== null && result.isSuccess && result.response.length > 1) {
      const decodedToken = jwtDecode<any>(result.response);
      const user = new User(
          decodedToken[Claims.EmailTokenKey],
          result.response
      )
      localStorage.setItem(this.userKey, JSON.stringify(user));

      this.router.navigate(['/privado']);
      message = 'User has been authenticated.';
    } else if (result !== null && !result.isSuccess) {
      message = result.errors;
    } else {
      message = 'Something went wrong.';
    }

    console.log(message);
  }

  private handleFailedAuthentication(error: HttpErrorResponse): void {
    let errorsMessage = [];

    let validationErrorDictionary = JSON.parse(JSON.stringify(error.error));
    for (let fieldName in validationErrorDictionary) {
      if (validationErrorDictionary.hasOwnProperty(fieldName)) {
        errorsMessage.push(validationErrorDictionary[fieldName]);
      }
    }
    console.log(errorsMessage);
  }*/
}

import { AuthenticationService } from './../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  //public weather: Observable<any> = this.weatherClient.getWeatherData();

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.IsLoggedIn();
  }

  logout(): void {
    this.authenticationService.logout();
  }

  public IsLoggedIn () {
    if (this.authenticationService.isLoggedIn()) {
      //alert('Ya esta logeado');
      this.router.navigate(['/privado']);
    }
     }
}

import { AuthenticationService } from './../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Idioma } from './../idioma';
import { IdiomaService } from './../idioma.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-idiomas',
  templateUrl: './idiomas.component.html',
  styleUrls: ['./idiomas.component.css']
})

export class IdiomasComponent implements OnInit {
  Idiomas: Idioma[] = [];

  //public weather: Observable<any> = this.weatherClient.getWeatherData();

  constructor(
    private idiomaService: IdiomaService,
    private authenticationService: AuthenticationService,
    //private weatherClient: WeatherClient,
    //private route: ActivatedRoute,
    private router:Router,
  ) {}

  ngOnInit(): void {
    this.get();
  }

  logout(): void {
    this.authenticationService.logout();
  }

  get() {
    this.idiomaService.get().subscribe((data) => {
      this.Idiomas = data;
    });
  }

  delete(id: number) {
    this.idiomaService.delete(id).subscribe({
      next: (data) => {
        this.Idiomas = this.Idiomas.filter(_ => _.id != id);
        this.router.navigate([""]);
      },
    });
  }
}

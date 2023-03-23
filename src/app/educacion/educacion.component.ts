import { AuthenticationService } from './../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Educacion } from '../educacion';
import { EducacionService } from './../educacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})

export class EducacionComponent implements OnInit {
  Educacions: Educacion[] = [];

  //public weather: Observable<any> = this.weatherClient.getWeatherData();

  constructor(
    private educacionService: EducacionService,
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
    this.educacionService.get().subscribe((data) => {
      this.Educacions = data;
    });
  }

  delete(id: number) {
    this.educacionService.delete(id).subscribe({
      next: (data) => {
        this.Educacions = this.Educacions.filter(_ => _.id != id);
        this.router.navigate([""]);
      },
    });
  }
}

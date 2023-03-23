import { AuthenticationService } from './../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Proyectos } from './../proyectos';
import { ProyectosService } from './../proyectos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})

export class ProyectoComponent implements OnInit {
  Proyectoss: Proyectos[] = [];

  //public weather: Observable<any> = this.weatherClient.getWeatherData();

  constructor(
    private proyectosService: ProyectosService,
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
    this.proyectosService.get().subscribe((data) => {
      this.Proyectoss = data;
    });
  }

  delete(id: number) {
    this.proyectosService.delete(id).subscribe({
      next: (data) => {
        this.Proyectoss = this.Proyectoss.filter(_ => _.id != id);
        this.router.navigate([""]);
      },
    });
  }
}

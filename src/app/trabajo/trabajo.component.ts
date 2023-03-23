import { AuthenticationService } from './../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Trabajo } from './../trabajo';
import { TrabajoService } from './../trabajo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trabajo',
  templateUrl: './trabajo.component.html',
  styleUrls: ['./trabajo.component.css']
})

export class TrabajoComponent implements OnInit {
  Trabajos: Trabajo[] = [];

  //public weather: Observable<any> = this.weatherClient.getWeatherData();

  constructor(
    private trabajoService: TrabajoService,
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
    this.trabajoService.get().subscribe((data) => {
      this.Trabajos = data;
    });
  }

  delete(id: number) {
    this.trabajoService.delete(id).subscribe({
      next: (data) => {
        this.Trabajos = this.Trabajos.filter(_ => _.id != id);
        this.router.navigate([""]);
      },
    });
  }
}

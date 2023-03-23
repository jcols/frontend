import { AuthenticationService } from './../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { About } from './../about';
import { AboutService } from './../about.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  Abouts: About[] = [];

  //public weather: Observable<any> = this.weatherClient.getWeatherData();

  constructor(
    private aboutService: AboutService,
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
    this.aboutService.get().subscribe((data) => {
      this.Abouts = data;
    });
  }

}

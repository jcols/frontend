import { AuthenticationService } from './../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Skill } from './../skill';
import { SkillService } from './../skill.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})

export class SkillsComponent implements OnInit {
  Skills: Skill[] = [];

  //public weather: Observable<any> = this.weatherClient.getWeatherData();

  constructor(
    private skillService: SkillService,
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
    this.skillService.get().subscribe((data) => {
      this.Skills = data;
    });
  }

  delete(id: number) {
    this.skillService.delete(id).subscribe({
      next: (data) => {
        this.Skills = this.Skills.filter(_ => _.id != id);
        this.router.navigate([""]);
      },
    });
  }
}

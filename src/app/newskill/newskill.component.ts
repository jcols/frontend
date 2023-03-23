import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from './../skill';
import { SkillService } from './../skill.service';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-newskill',
  templateUrl: './newskill.component.html',
  styleUrls: ['./newskill.component.css']
})

export class NewskillComponent implements OnInit {
  fruitForm: Skill = {
    id: 0,
    skill: '',
    grado: 0
  };

  skillFormControl= new FormControl('', [Validators.required, Validators.minLength(4)]);
  gradoFormControl= new FormControl('', [Validators.required, Validators.min(1), Validators.max(100)]);

  matcher = new MyErrorStateMatcher();

  constructor(private skillService: SkillService,
    private router:Router) {}

  ngOnInit(): void {}

  create(){
    if (this.skillFormControl.invalid || this.gradoFormControl.invalid) { return }
    this.skillService.new(this.fruitForm)
    .subscribe({
      next:(data) => {
        this.router.navigate([""])
      },
      error:(err) => {
        console.log(err);
      }
    })
  }
}

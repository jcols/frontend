import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  selector: 'app-editskill',
  templateUrl: './editskill.component.html',
  styleUrls: ['./editskill.component.css']
})
export class EditskillComponent implements OnInit {

    fruitForm: Skill = {
      id: 0,
      skill: '',
      grado: 0

    };

    skillFormControl= new FormControl('', [Validators.required, Validators.minLength(4)]);
    gradoFormControl= new FormControl('', [Validators.required, Validators.min(1), Validators.max(100)]);

    matcher = new MyErrorStateMatcher();

    constructor(
      private route: ActivatedRoute,
      private router:Router,
      private skillService: SkillService

    ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getById(id);
      console.log("id: "+id);
    });
  }

  getById(id: number) {
    this.skillService.getById(id).subscribe((data) => {
      this.fruitForm = data;
   });
  }

  update() {
    if (this.skillFormControl.invalid || this.gradoFormControl.invalid) { return }
    this.skillService.update(this.fruitForm)
    .subscribe({
      next:(data) => {
        this.router.navigate([""]);
      },
      error:(err) => {
        console.log(err);
      }
    })
  }
}

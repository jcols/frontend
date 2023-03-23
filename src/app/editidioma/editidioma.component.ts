import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Idioma } from './../idioma';
import { IdiomaService } from './../idioma.service';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-editidioma',
  templateUrl: './editidioma.component.html',
  styleUrls: ['./editidioma.component.css']
})
export class EditidiomaComponent implements OnInit {

    fruitForm: Idioma = {
      id: 0,
      idioma: '',
      grado: 0

    };

    idiomaFormControl= new FormControl('', [Validators.required, Validators.minLength(4)]);
    gradoFormControl= new FormControl('', [Validators.required, Validators.min(1), Validators.max(100)]);

    matcher = new MyErrorStateMatcher();

    constructor(
      private route: ActivatedRoute,
      private router:Router,
      private idiomaService: IdiomaService

    ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getById(id);
      console.log("id: "+id);
    });
  }

  getById(id: number) {
    this.idiomaService.getById(id).subscribe((data) => {
      this.fruitForm = data;
   });
  }

  update() {
    if (this.idiomaFormControl.invalid || this.gradoFormControl.invalid) { return }
    this.idiomaService.update(this.fruitForm)
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

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from '../educacion';
import { EducacionService } from './../educacion.service';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-neweducacion',
  templateUrl: './neweducacion.component.html',
  styleUrls: ['./neweducacion.component.css']
})

export class NeweducacionComponent implements OnInit {
  fruitForm: Educacion = {
    id: 0,
    escuela : '',
    logo: '',
    titulo: '',
    periodo: new Date
  };

  escuelaFormControl= new FormControl('', [Validators.required, Validators.minLength(4)]);
  tituloFormControl= new FormControl('', [Validators.required, Validators.minLength(4)]);
  periodoFormControl= new FormControl('', Validators.required);

  matcher = new MyErrorStateMatcher();

  constructor(private educacionService: EducacionService,
    private router:Router) {}

  ngOnInit(): void {}

  create(){
    if (this.escuelaFormControl.invalid || this.tituloFormControl.invalid || this.periodoFormControl.invalid) { return }
    this.educacionService.new(this.fruitForm)
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

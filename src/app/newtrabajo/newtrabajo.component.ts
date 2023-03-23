import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Trabajo } from './../trabajo';
import { TrabajoService } from './../trabajo.service';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-newtrabajo',
  templateUrl: './newtrabajo.component.html',
  styleUrls: ['./newtrabajo.component.css']
})

export class NewtrabajoComponent implements OnInit {
  fruitForm: Trabajo = {
    id: 0,
    puesto : '',
    inicio: new Date,
    fin: new Date,
    empresa: '',
    logo: '',
    tareas: ''
  };

  puestoFormControl= new FormControl('', [Validators.required, Validators.minLength(4)]);
  empresaFormControl= new FormControl('', [Validators.required, Validators.minLength(4)]);
  inicioFormControl= new FormControl('', Validators.required);
  finFormControl= new FormControl('', Validators.required);
  tareasFormControl= new FormControl('', [Validators.required, Validators.minLength(4)]);

  matcher = new MyErrorStateMatcher();

  constructor(private trabajoService: TrabajoService,
    private router:Router) {}

  ngOnInit(): void {}

  create(){
    if (this.empresaFormControl.invalid || this.finFormControl.invalid || this.inicioFormControl.invalid || this.puestoFormControl.invalid || this.tareasFormControl.invalid ) { return }
    this.trabajoService.new(this.fruitForm)
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

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from './../proyectos';
import { ProyectosService } from './../proyectos.service';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-editproyecto',
  templateUrl: './editproyecto.component.html',
  styleUrls: ['./editproyecto.component.css']
})
export class EditproyectoComponent implements OnInit {

    fruitForm: Proyectos = {
      id: 0,
      nombre: '',
      fecha: new Date(),
      descripcion: '',
      link: ''
    };

    nombreFormControl= new FormControl('', [Validators.required, Validators.minLength(4)]);
    descripcionFormControl= new FormControl('', [Validators.required, Validators.minLength(4)]);
    fechaFormControl= new FormControl('', Validators.required);
    linkFormControl= new FormControl('', Validators.required);

    matcher = new MyErrorStateMatcher();

    constructor(
      private route: ActivatedRoute,
      private router:Router,
      private proyectosService: ProyectosService

    ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getById(id);
      console.log("id: "+id);
    });
  }

  getById(id: number) {
    this.proyectosService.getById(id).subscribe((data) => {
      this.fruitForm = data;
   });
  }

  update() {
    if (this.nombreFormControl.invalid || this.descripcionFormControl.invalid || this.linkFormControl.invalid || this.fechaFormControl.invalid ) { return }
    this.proyectosService.update(this.fruitForm)
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

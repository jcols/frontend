import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { About } from './../about';
import { AboutService } from './../about.service';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-editabout',
  templateUrl: './editabout.component.html',
  styleUrls: ['./editabout.component.css']
})
export class EditaboutComponent implements OnInit {

  fruitForm: About = {
    id: 0,
    foto: '',
    nombre: '',
    titulo: '',
    lugar: '',
    mail: '',
    telefono: ''
  };
/*
  aboutForm = new FormGroup({
  emailFormControl: new FormControl('', [Validators.required, Validators.email]),
  nombreFormControl: new FormControl('', [Validators.required, Validators.minLength(4)]),
  telefonoFormControl: new FormControl('', [Validators.required, Validators.minLength(4)]),
  tituloFormControl: new FormControl('', [Validators.required, Validators.minLength(4)]),
  lugarFormControl: new FormControl(this.fruitForm.lugar, [Validators.required, Validators.minLength(4)])
});
*/

  emailFormControl= new FormControl(this.fruitForm.mail, [Validators.required, Validators.email]);
  nombreFormControl= new FormControl(this.fruitForm.nombre, [Validators.required, Validators.minLength(4)]);
  telefonoFormControl= new FormControl(this.fruitForm.telefono, [Validators.required, Validators.minLength(4)]);
  tituloFormControl= new FormControl(this.fruitForm.titulo, [Validators.required, Validators.minLength(4)]);
  lugarFormControl= new FormControl(this.fruitForm.lugar, [Validators.required, Validators.minLength(4)]);


  matcher = new MyErrorStateMatcher();

    constructor(
      private route: ActivatedRoute,
      private router:Router,
      private aboutService: AboutService

    ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getById(id);
    });
  }

  getById(id: number) {
    this.aboutService.getById(id).subscribe((data) => {
      this.fruitForm = data;
      //this.nombreFormControl.setValue(data.nombre);
   });
  }

  update() {
   if (this.emailFormControl.invalid || this.nombreFormControl.invalid || this.telefonoFormControl.invalid || this.tituloFormControl.invalid || this.lugarFormControl.invalid) { return }
    this.aboutService.update(this.fruitForm)
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

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from './../../producto';
import { ProductoService } from './../../producto.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

    fruitForm: Producto = {
      id: 0,
      name: '',
      price: ''

    };
    constructor(
      private route: ActivatedRoute,
      private router:Router,
      private productoService: ProductoService

    ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getById(id);
      console.log("id: "+id);
    });
  }

  getById(id: number) {
    this.productoService.getById(id).subscribe((data) => {
      this.fruitForm = data;
   });
  }

  update() {
    this.productoService.update(this.fruitForm)
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

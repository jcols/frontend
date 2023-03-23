import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from './../../producto';
import { ProductoService } from './../../producto.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css'],
})
export class NewComponent implements OnInit {
  fruitForm: Producto = {
    id: 0,
    name: '',
    price: ''
  };

  constructor(private productoService: ProductoService,
    private router:Router) {}

  ngOnInit(): void {}

  create(){
    this.productoService.new(this.fruitForm)
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

import { AuthenticationService } from './../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Producto } from './../producto';
import { ProductoService } from './../producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-secret',
  templateUrl: './secret.component.html',
  styleUrls: ['./secret.component.css'],
})
export class SecretComponent implements OnInit {
  Productos: Producto[] = [];

  //public weather: Observable<any> = this.weatherClient.getWeatherData();

  constructor(
    private productoService: ProductoService,
    private authenticationService: AuthenticationService,
    //private weatherClient: WeatherClient,
    //private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.get();
  }

  logout(): void {
    this.authenticationService.logout();
  }

  get() {
    this.productoService.get().subscribe((data) => {
      this.Productos = data;
    });
  }

  delete(id: number) {
    this.productoService.delete(id).subscribe({
      next: (data) => {
        this.Productos = this.Productos.filter((_) => _.id != id);
        this.router.navigate(['']);
      },
    });
  }
}

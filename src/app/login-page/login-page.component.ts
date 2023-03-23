import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.IsLoggedIn();
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  public onSubmit() {
    if (this.loginForm.invalid) {
      //console.log('Wrong!');
      return;
    }
    this.authenticationService.login(
      this.loginForm.get('email')!.value,
      this.loginForm!.get('password')!.value
    );
  }

  public IsLoggedIn() {
    if (this.authenticationService.isLoggedIn()) {
      //alert('Ya esta logeado');
      this.router.navigate(['/privado']);
    }
  }
}

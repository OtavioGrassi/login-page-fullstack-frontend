import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms'; // <- AQUI ESTAVA O ERRO
import { DefaultLoginLayoutComponent } from '../../componentes/default-login-layout/default-login-layout.component';
import { PrimaryInputComponent } from '../../componentes/primary-input/primary-input.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    DefaultLoginLayoutComponent,
    PrimaryInputComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }
}


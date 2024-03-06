import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Login } from '../Models/login-interface';
import { AuthService } from '../../../Services/auth.service';
import { Router } from '@angular/router';
import { StateService } from '../../../Services/state.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  formularioLogin: FormGroup;
  hide = true;
  progressBar = false;

  authService = inject(AuthService);
  private router = inject(Router);
  stateService = inject(StateService);

  constructor(private fb: FormBuilder) {
    this.formularioLogin = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  getErrorMessageEmail() {
    if (this.formularioLogin.controls['email'].hasError('required')) {
      return 'You must enter a value';
    }

    return this.formularioLogin.controls['email'].hasError('email')
      ? 'Not a valid email'
      : '';
  }
  getErrorMessagePassword() {
    if (this.formularioLogin.controls['password'].hasError('required')) {
      return 'You must enter a password';
    }

    return this.formularioLogin.controls['password'].hasError('minlength')
      ? 'The password must be at least 6 characters long'
      : '';
  }

  Login() {
    this.progressBar = true;

    const credentials: Login = {
      email: this.formularioLogin.get('email')?.value,
      password: this.formularioLogin.get('password')?.value,
    };

    this.authService.Login(credentials).subscribe((result) => {
      console.log('result del login: ', result);
      if (result.success) {
        localStorage.setItem('authToken', result.token);
        localStorage.setItem('user', JSON.stringify(result.user));

        this.stateService.updateUser(result.user);

        this.router.navigate(['home']);
      }
    });
  }
}

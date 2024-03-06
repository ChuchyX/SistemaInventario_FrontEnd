import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../../Services/auth.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrl: './register-user.component.scss',
})
export class RegisterUserComponent {
  formularioRegister: FormGroup;
  hide = true;
  selectedValue = 'User';
  authService = inject(AuthService);

  roles = [
    { value: 'User'},
    { value: 'Admin'},
  ];

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<RegisterUserComponent>) {
    this.formularioRegister = fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      age: ['', [Validators.required]],
      gender: ['Masculino', [Validators.required]],
      role: ['User', [Validators.required]],
    });
  }

  Register() {
    if(this.formularioRegister.valid)
    {
      this.authService.Register(this.formularioRegister.value).subscribe(result => {
        this.dialogRef.close();
      });
    }
  }

  getErrorMessageUsername() {
    return 'You must enter a value';
  }

  getErrorMessageEmail() {
    if (this.formularioRegister.controls['email'].hasError('required')) {
      return 'You must enter a value';
    }

    return this.formularioRegister.controls['email'].hasError('email')
      ? 'Not a valid email'
      : '';
  }
  getErrorMessagePassword() {
    if (this.formularioRegister.controls['password'].hasError('required')) {
      return 'You must enter a password';
    }

    return this.formularioRegister.controls['password'].hasError('minlength')
      ? 'The password must be at least 6 characters long'
      : '';
  }
  getErrorMessageAge() {
    return 'You must enter a value';
  }
}

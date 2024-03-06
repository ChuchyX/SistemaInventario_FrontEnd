import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Login, RegisterDTO } from '../Modules/Login/Models/login-interface';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { UserServiceResponse } from '../Models/UserServiceResponse-interface';
import { Router } from '@angular/router';
import { UserDTO } from '../Models/UserDTO-interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private httpClient = inject(HttpClient);
  router = inject(Router);
  API = environment.API + 'user/';
  constructor() { }

  public get IsAuthenticated(): boolean {
    return localStorage.getItem('authToken') !== null;
  }

  public Login(credentials: Login): Observable<UserServiceResponse> {
    return this.httpClient.post<UserServiceResponse>(
      this.API + 'login',
      credentials
    );
  }

  public Register(registerDto: RegisterDTO): Observable<UserServiceResponse> {
    return this.httpClient.post<UserServiceResponse>(
      this.API + 'register',
      registerDto
    );
  }

  public GetAllUsers(): Observable<UserDTO[]>{
    return this.httpClient.get<UserDTO[]>(this.API + 'getallusers');
  }

  Logout() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    this.router.navigate(['login']);
  }
}

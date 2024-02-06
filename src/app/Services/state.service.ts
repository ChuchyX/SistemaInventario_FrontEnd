import { Injectable, signal } from '@angular/core';
import { UserDTO } from '../Models/UserDTO-interface';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  User = signal<UserDTO>({username: '', email: '', edad: 0, sexo: '', rol: ''});

  updateUser(newUser: UserDTO)
  {
    this.User.update(u => u = newUser);
  }
}

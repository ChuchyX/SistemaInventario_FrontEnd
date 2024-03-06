import { Injectable, signal } from '@angular/core';
import { UserDTO } from '../Models/UserDTO-interface';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  User = signal<UserDTO>({username: '', email: '', age: 0, gender: '', role: ''});

  updateUser(newUser: UserDTO)
  {
    this.User.update(u => u = newUser);
  }
}

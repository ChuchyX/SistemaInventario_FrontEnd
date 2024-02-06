import { Component, inject} from '@angular/core';
import { UserDTO } from '../../../../Models/UserDTO-interface';
import { StateService } from '../../../../Services/state.service';
import { AuthService } from '../../../../Services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  stateService = inject(StateService);
  authService = inject(AuthService);
  user: UserDTO = {username: '', email: '', edad: 0, sexo: '', rol: ''};

  constructor() {
    if(localStorage.getItem('user'))
    {    
      this.user = JSON.parse(localStorage.getItem('user')!);
      this.stateService.updateUser(this.user);
    }
   
  }

  Logout()
  {
    this.authService.Logout();
  }

}

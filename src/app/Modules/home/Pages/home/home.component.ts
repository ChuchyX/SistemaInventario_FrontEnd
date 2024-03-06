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

  user: UserDTO = {username: '', email: '', age: 0, gender: '', role: ''};

  sidenav = true;

  constructor() {
    if(localStorage.getItem('user'))
    {    
      this.user = JSON.parse(localStorage.getItem('user')!);
      this.stateService.updateUser(this.user);
    }
   
  }

}

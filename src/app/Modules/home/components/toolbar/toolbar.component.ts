import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { StateService } from '../../../../Services/state.service';
import { AuthService } from '../../../../Services/auth.service';
import { UserDTO } from '../../../../Models/UserDTO-interface';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
  stateService = inject(StateService);
  authService = inject(AuthService);

  @Input() user: UserDTO = {username: '', email: '', age: 0, gender: '', role: ''};

  @Output() toggleNav = new EventEmitter<void>();

  Logout()
  {
    this.authService.Logout();
  }
}

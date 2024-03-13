import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { StateService } from '../../../../Services/state.service';
import { AuthService } from '../../../../Services/auth.service';
import { UserDTO } from '../../../../Models/UserDTO-interface';
import { MatDialog } from '@angular/material/dialog';
import { ProfileConfigurationComponent } from '../profile-configuration/profile-configuration.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
  stateService = inject(StateService);
  authService = inject(AuthService);
  dialog = inject(MatDialog);

  @Input() user: UserDTO = {username: '', email: '', age: 0, gender: '', role: ''};

  @Output() toggleNav = new EventEmitter<void>();

  openProfileConfiguration()
  {
    let refDialog = this.dialog.open(ProfileConfigurationComponent);
  }

  Logout()
  {
    this.authService.Logout();
  }
}

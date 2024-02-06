import { Component, inject } from '@angular/core';
import { UserDTO } from '../../../../Models/UserDTO-interface';
import { StateService } from '../../../../Services/state.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  stateService = inject(StateService);

  user = this.stateService.User;

  constructor() {}
}

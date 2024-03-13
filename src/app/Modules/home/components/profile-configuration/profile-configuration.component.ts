import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, inject } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { AuthService } from '../../../../Services/auth.service';
import { StateService } from '../../../../Services/state.service';

@Component({
  selector: 'app-profile-configuration',
  templateUrl: './profile-configuration.component.html',
  styleUrl: './profile-configuration.component.scss',
  providers: [MessageService],
})
export class ProfileConfigurationComponent implements OnDestroy {

  messageService = inject(MessageService);
  http = inject(HttpClient);
  authService = inject(AuthService);
  stateService = inject(StateService);

  user = this.stateService.User;
  private subscriptionUpload: Subscription = new Subscription();


  handleFileInput(event: Event) {
    let files = (event.target as HTMLInputElement).files;
    if (files) {
      for (let index = 0; index < files.length; index++) {
        if (files.item(index)) {
          this.postFile(files.item(index) as File);
        }
      }
    }

    (event.target as HTMLInputElement).files = null;
    (event.target as HTMLInputElement).value = '';
  }

  postFile(file: File) {
    this.subscriptionUpload = this.authService
      .postFile(file)
      .subscribe((result) => {
        console.log(result);
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'File Uploaded with Basic Mode',
        });
      });
  }

  ngOnDestroy(): void {
    if (this.subscriptionUpload) this.subscriptionUpload.unsubscribe();
  }
}

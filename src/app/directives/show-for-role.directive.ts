import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { StateService } from '../Services/state.service';

@Directive({
  selector: '[appShowForRole]',
})
export class ShowForRoleDirective {
  constructor(
    private stateService: StateService,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  @Input() set appShowForRole(role: string) {
    const userRole = this.stateService.User().role;

    if (userRole && userRole === role) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}

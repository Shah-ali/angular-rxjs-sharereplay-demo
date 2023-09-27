import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'my-app',
  template: `
    <div *ngIf="user$ | async as user">
      <h1>User Details</h1>
      <p>Name: {{ user.name }}</p>
      <p>Email: {{ user.email }}</p>
    </div>
  `,
})
export class AppComponent {
  user$;

  constructor(private appSerice: AppService) {}

  ngOnInit() {
    this.user$ = this.appSerice.getUserData();
  }
}

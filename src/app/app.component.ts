import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'my-app',
  template: `
    <div *ngIf="user$ | async as user">
      <h1>User Details</h1>
      <p>Name: {{ users.name }}</p>
      <p>Email: {{ users.email }}</p>
    </div>
  `,
})
export class AppComponent {
  user$;
  users: any;

  constructor(private appSerice: AppService) {}

  ngOnInit() {
    this.user$ = this.appSerice.getUserData();
    this.user$.subscribe((result) => {
      this.users = result;
    });
  }
}

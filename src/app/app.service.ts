import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private user$: Observable<any>;

  constructor(private http: HttpClient) {}

  getUserData(): Observable<any> {
    // Check if we already have a cached observable, otherwise fetch from the API
    if (!this.user$) {
      this.user$ = this.http
        .get<any>('https://jsonplaceholder.typicode.com/users/1')
        .pipe(
          shareReplay(1) // Cache the result and replay it for subsequent subscribers
        );
    }
    return this.user$;
  }
}

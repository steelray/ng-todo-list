import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';

const USER = {
  login: 'admin',
  password: 'admin001'
};

const AUTH_TOKEN = '__someAuthToken';

@Injectable({
  providedIn: 'root'
})
export class AuthMockService {
  constructor() {
  }

  login(login: string, password: string): Observable<string> {
    if (login === USER.login && password === USER.password) {
      localStorage.setItem('__authToken', AUTH_TOKEN);
      return of(AUTH_TOKEN);
    }
    return of(null);
  }

  isAuthed(): boolean {
    const token = localStorage.getItem('__authToken');
    return token && token === AUTH_TOKEN;
  }
}

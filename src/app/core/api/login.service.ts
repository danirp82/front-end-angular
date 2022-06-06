import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/internal/Observable';

import { ILogin } from '../../shared/models/login.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private URL: string = 'http://localhost:3000/login';

  constructor(private http: HttpClient) { }

  login(): Observable<ILogin> {
    return this.http.get<ILogin>(this.URL);
  }

  setToken(login: ILogin) {
    localStorage.setItem('token', login.pass);
  }

  setRole(login: ILogin) {
    localStorage.setItem('role', login.user);
  }

  getRole(): boolean {
    if(localStorage.getItem('role') === 'admin') {
      return true;
    } else {
      return false;
    }
  }
}

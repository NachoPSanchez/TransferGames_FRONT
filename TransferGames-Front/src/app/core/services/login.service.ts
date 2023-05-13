import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { LoginCredentials } from '../models/loginCredentials';
import { Credentials } from '../models/credentials';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private urlUser= "http://localhost:8080/user";
  private isAuthenticated = false;

  constructor(private httpClient: HttpClient) { }

  getByEmail(email: string):Observable<Credentials>{
    const encodedEmail = encodeURIComponent(email);
    const sanitizedEmail = encodedEmail.replace(/%40/g, '@');
    return this.httpClient.get<Credentials>(`${this.urlUser}/${sanitizedEmail}`);
  }

  login(creds: LoginCredentials) {
    return this.httpClient.post('http://localhost:8080/login', creds, {
      observe: 'response'
    }).pipe(map((response: HttpResponse<any>) => {
      const body = response.body;
      const headers = response.headers;


      const bearerToken = headers.get('Authorization')!;
      const token = bearerToken.replace('Bearer ', '');


      localStorage.setItem('token', token);


      return body;
    }))
  }


  logout() {
    localStorage.clear();
  }


  isLoggedIn(): boolean {
    if (this.getToken() === null) {
      this.isAuthenticated = false;
    } else {
      this.isAuthenticated = true;
    }
    return this.isAuthenticated;
  }
  getToken() {
    return localStorage.getItem('token');
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private urlUser= "http://localhost:8080/user";
  jwt: JwtHelperService = new JwtHelperService();

  constructor(private httpClient: HttpClient) { }

  findRolUser(){
    let token = localStorage.getItem('token')!;
    return this.jwt.decodeToken(token).rol;
  }
  getByEmail(email: string):Observable<User>{
    const encodedEmail = encodeURIComponent(email);
    const sanitizedEmail = encodedEmail.replace(/%40/g, '@');
    return this.httpClient.get<User>(`${this.urlUser}/${sanitizedEmail}`);
  }
}

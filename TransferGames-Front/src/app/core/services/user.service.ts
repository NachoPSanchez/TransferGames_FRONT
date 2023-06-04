import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Credentials } from '../models/credentials';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private urlUser= "http://localhost:8080/user";
  jwt: JwtHelperService = new JwtHelperService();

  constructor(private httpClient: HttpClient) { }

  findRolUser(){
    let token = localStorage.getItem('token')!;
    return this.jwt.decodeToken(token).roles[0].authority;
  }
  getByEmail(email: string):Observable<Credentials>{
    const encodedEmail = encodeURIComponent(email);
    const sanitizedEmail = encodedEmail.replace(/%40/g, '@');
    return this.httpClient.get<Credentials>(`${this.urlUser}/${sanitizedEmail}`);
  }
}

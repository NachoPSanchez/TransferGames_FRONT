import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User, UserResponse } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private urlUser= "http://localhost:8080/user";
  private urlAdminUser= "http://localhost:8080/admin/user";
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
  getAll():Observable<UserResponse[]> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization',`Bearer ${token}`);
    return this.httpClient.get<UserResponse[]>(`${this.urlAdminUser}`, {headers});
  }
  getById(id: string):Observable<UserResponse>{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization',`Bearer ${token}`);
    return this.httpClient.get<UserResponse>(`${this.urlAdminUser}/${id}`, {headers});
  }
}

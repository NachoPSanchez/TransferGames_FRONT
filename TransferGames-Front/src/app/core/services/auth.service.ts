import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthResponse } from '../models/auth-response.interface';
import { environment } from 'src/environment';
import { LoginCredentials } from '../models/loginCredentials';
import { User, UserRegister, UserResponse } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public loginEvent: EventEmitter<boolean> = new EventEmitter();

  constructor(private http: HttpClient, private router: Router) { }

  /**
   * Peticion que comprueba si el token que tenemos es valido para acceder a una ruta de la aplicación
   * @returns
   */
  validateToken():Observable <AuthResponse>{
    let url=environment.baseUrl+'/auth';
    return this.http.get<AuthResponse>(url);
  }

  public getToken(): string | null{
    return localStorage.getItem('token');
  }

  public isLogged(): boolean{
    if(this.getToken()){
      return true;
    }
    return false;
  }

  public logOut():void{
    window.localStorage.clear();
    this.router.navigate(['/home']);
  }

  login(data: LoginCredentials){
    let url=environment.baseUrl+'/login';
    const body = {
      "email":data.email,
      "password":data.password
    }
    return this.http.post<AuthResponse>(url,body);
  }

  getUserByEmail(email:string){
    let url=environment.baseUrl+'/user';
    const body = {
      "email":email
    }
    return this.http.get<AuthResponse>(url+body.email);
  }

  register(user:UserRegister){
    let url = environment.baseUrl+'/register';
    const body = {
      name: user.name,
      email:user.email,
      password:user.password,
      roleId:user.roleId
    }
    return this.http.post<UserRegister>(url,body);
  }
  
  loggedUser():Observable<UserResponse>{
    let url=environment.baseUrl+"api/v1/auth";
   
    return this.http.get<UserResponse>(url);
  }


  emitirEventoLogin(refres:boolean) {
    this.loginEvent.emit(refres);
  }
}

import { Injectable } from '@angular/core';
import { AuthGuard } from '../helpers/guards/auth.guard';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class FirstTimeService {
  
  private isFirstTimeKey = 'isFirstTime';

  constructor(private loginService: LoginService) { }

  isFirstTime(): boolean {
    const isFirstTime = localStorage.getItem(this.isFirstTimeKey);
    let state : boolean = false;
    if (!isFirstTime && !this.loginService.isLoggedIn()) {
      // Si la key no existe en el almacenamiento local,
      // establece la key y devuelve true para indicar que es la primera vez.
      localStorage.setItem(this.isFirstTimeKey, 'false');
      state = true;
    }else{

    state = false;
  }
  return state;
  }
}
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserService } from '../../services/user.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'

})

export class AuthRolGuard implements CanActivate {
  private state: boolean = false;

  constructor(private userService: UserService, private router: Router, private toastr: ToastrService) { }

  canActivate(): boolean {
      if (this.getUserROL() === 'ADMIN') {
          this.state = true;
      } else {
        this.router.navigateByUrl("/login/");
        this.toastr.info("Contacta con un administrador ", 'No tienes permiso para estar aquí', {
          timeOut: 4000,
        });
          this.state = false;
      }
      return this.state;
  }

  getUserROL(): string | null{
    return localStorage.getItem('user_ROL');
  }

}
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserService } from '../../services/user.service';

@Injectable({
  providedIn: 'root'

})

export class AuthRolGuard implements CanActivate {
  private state: boolean = false;

  constructor(private userService: UserService, private router: Router) { }

  canActivate(): boolean {
      if (this.getUserROL() === 'ADMIN') {
          this.state = true;
      } else {
          Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'you don`t have permissions',
              confirmButtonText: 'Ok'
          }).then(
              (result) => {
                  if (result.isConfirmed) {
                      this.router.navigate(['/login']);
                  }
              }
          );
          this.state = false;
      }
      return this.state;
  }

  getUserROL(): string | null{
    return localStorage.getItem('user_ROL');
  }

}
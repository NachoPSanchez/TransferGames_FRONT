import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserRegister } from 'src/app/core/models/user.interface';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {

  user: UserRegister = {} as UserRegister;

  constructor(private serviceAuth: AuthService, private router: Router, private toastr: ToastrService){}

  registerAuth() {
    this.serviceAuth.register(this.user).subscribe({
      next: () => {
        this.router.navigateByUrl("/administracion/usuarios")
      },
      error: (err) => {
        this.toastr.error(err.error.message, 'Error', {
          timeOut: 4000,
        });
        console.log(err);
      }
    });
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User, UserRegister } from 'src/app/core/models/user.interface';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  creds: UserRegister = {
    name:'',
    email:'',
    password:'',
    roleId:''
  };
  
  constructor(private serviceAuth: AuthService, private router: Router, private toastr: ToastrService){}

  registerAuth() {
    const data: UserRegister = {
      name: this.creds.name,
      email: this.creds.email,
      password: this.creds.password,
      roleId: this.creds.roleId
    };
    this.serviceAuth.register(data).subscribe({
      next: () => {
        this.router.navigateByUrl("/home")
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

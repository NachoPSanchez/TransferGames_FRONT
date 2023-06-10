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
    rol:''
  };
  
  constructor(private serviceAuth: AuthService, private router: Router, private toastr: ToastrService){}

  registerAuth() {
    const data: UserRegister = {
      name: this.creds.name,
      email: this.creds.email,
      password: this.creds.password,
      rol: ''
    };
    this.serviceAuth.register(data).subscribe({
      next: () => {
        this.router.navigateByUrl("/home")
      },
      error: (err) => {
        this.toastr.error(err.message, 'Error', {
          timeOut: 4000,
        });
      }
    });
  }
}

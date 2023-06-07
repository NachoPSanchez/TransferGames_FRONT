import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router, RouterLinkActive } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthGuard } from 'src/app/core/helpers/guards/auth.guard';
import { Credentials } from 'src/app/core/models/credentials';
import { LoginCredentials } from 'src/app/core/models/loginCredentials';
import { LoginService } from 'src/app/core/services/login.service';
import { UserService } from 'src/app/core/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  creds: LoginCredentials = {
    email:'',
    password:''
  };
  credsWithName: Credentials = {
    email: '',
    password: '',
    name: '',
    roles:[]
  }
  isFirstTimeLogin: boolean = false;


  constructor(private loginService: LoginService, private router: Router, private toastr : ToastrService, private authGuard : AuthGuard){ }

  login(form: NgForm){
    this.loginService.login(this.creds)
      .subscribe(() =>{
        this.router.navigate(['home']);           
        this.toastr.success('This is Transfer Games community.', 'Welcome again', {
          timeOut: 4000,
          
        });
              
      }, (error)=>{
        this.toastr.error(error.error.slice(7), 'Error', {
          timeOut: 4000,
          
        });
      });
    
      
  }
}

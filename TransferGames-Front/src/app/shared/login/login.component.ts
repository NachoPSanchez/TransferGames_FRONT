import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Credentials } from 'src/app/core/models/credentials';
import { LoginCredentials } from 'src/app/core/models/loginCredentials';
import { LoginService } from 'src/app/core/services/login.service';
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


  constructor(private loginService: LoginService, private router: Router){ }


  login(form: NgForm){
    console.log(this.creds);
    this.loginService.login(this.creds)
      .subscribe(response =>{
        Swal.fire({
          title: 'Login sucessfull',
          icon: 'success'
        });
        this.router.navigate(['home']);
      });
  }

}

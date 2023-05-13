import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router, RouterLinkActive } from '@angular/router';
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
  credsWithName: Credentials = {
    email: '',
    password: '',
    name: ''
  }


  constructor(private loginService: LoginService, private router: Router){ }

  login(form: NgForm){
    this.loginService.login(this.creds)
      .subscribe(response =>{
        Swal.fire({
          title: `Login successful`,
          text: 'Welcome again to TransferGames Community!',
          icon: 'success'
        }).then(
          () => {
            this.router.navigate(['home']);
          }
        );
      });
  }
}

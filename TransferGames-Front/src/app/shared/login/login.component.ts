import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthResponse } from 'src/app/core/models/auth-response.interface';
import { LoginCredentials } from 'src/app/core/models/loginCredentials';
import { AuthService } from 'src/app/core/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userDetails!: AuthResponse | null;
    eye: boolean = false;
    type: string = 'password';

  constructor(private toastr : ToastrService,
    private serviceAuth: AuthService, 
    private formBuilder: FormBuilder, 
    private router:Router){ }

    ngOnInit(): void {
        this.removeRolIfExists();
    }

    dataLogin: LoginCredentials = {
      email: '',
      password: '',
    }
    togleEye(){
      if(this.eye === false){
        this.eye = true;
        this.type = 'text';
      }else{
        this.eye = false;
        this.type = 'password';
      }
    }
    removeTokenIfExists(){
      if(localStorage.getItem('token')) localStorage.removeItem('token')
    }
    removeRolIfExists(){
      if(localStorage.getItem('ROLE')) localStorage.removeItem('ROLE')
    }
    login(){
      const data:LoginCredentials={
      "email": this.dataLogin.email,
      "password": this.dataLogin.password
      }
      this.serviceAuth.login(data).subscribe({
        next: resp => {
          let respuesta:any = resp;
          if(respuesta.error){ 
            this.toastr.error(respuesta.error, 'Error', {
              timeOut: 4000,
              
            });
          } else {
            //redirigir y guardar el token en el localStorage 
            localStorage.setItem("token", resp.jwt_token);
            this.serviceAuth.emitirEventoLogin(true);
            this.router.navigateByUrl("/home");
          }
         
        },
        error: err => {
          this.serviceAuth.emitirEventoLogin(false);
          this.toastr.error(err.error.message, 'Error', {
            timeOut: 4000,
          });
        }
      });
    }
}

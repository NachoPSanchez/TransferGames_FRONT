import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Credentials } from 'src/app/core/models/credentials';
import { LoginCredentials } from 'src/app/core/models/loginCredentials';
import { LoginService } from 'src/app/core/services/login.service';
import { RegisterService } from 'src/app/core/services/register.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  creds: Credentials = {
    name:'',
    email:'',
    password:'',
    roles:[]
  };
  
  constructor(private registerService:RegisterService, private loginService: LoginService, private router: Router, private toastr: ToastrService){}

  register(form: NgForm){
    if(form.valid){
      this.registerService.register(this.creds).subscribe(() =>{
        
      }, (error)=>{
        this.toastr.error(error.error.slice(7), 'Error', {
          timeOut: 4000,
          
        });
      });
    }else{
      //Caso de que el formulario no sea valido
    }
    
  }
}

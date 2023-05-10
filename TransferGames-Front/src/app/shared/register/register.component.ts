import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Credentials } from 'src/app/core/models/credentials';
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
    password:''
  };
  
  constructor(private registerService:RegisterService){}

  register(form: NgForm){
    if(form.valid){
      this.registerService.register(this.creds).subscribe(() =>{
        Swal.fire({
          title:`Hello, ${this.creds.name}`,
          text:'Register successfully. Welcome to TransferGames Community',
          icon:'success'
        });
      });
    }else{
      //Caso de que el formulario no sea valido
    }
    
  }
}

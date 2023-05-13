import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Credentials } from 'src/app/core/models/credentials';
import { LoginService } from 'src/app/core/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = 'header'
  isDropdownOpen = false;
 
  constructor(private loginService: LoginService, private router: Router){}
  menuVariable:boolean = false;
  menu_icon_variable:boolean= false;


openMenu(){
  this.menuVariable =! this.menuVariable ;
  this.menu_icon_variable =! this.menu_icon_variable;
}
isLoggedIn(){
  return this.loginService.getToken();
}
logout(){
  Swal.fire({
    icon: 'success',
    title: 'Logged out',
    text: 'You have logged out successfully',
    confirmButtonText: 'Ok'
}).then(
    (result) => {
        if (result.isConfirmed) {
            this.router.navigate(['/home']);
        }
    }
);
  this.loginService.logout();
}

toggleDropdown() { //desplegable del header
  this.isDropdownOpen = !this.isDropdownOpen;
}

miPerfil(){
  
}
}

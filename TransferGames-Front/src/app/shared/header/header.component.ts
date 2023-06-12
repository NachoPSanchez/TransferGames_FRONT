import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = 'header'
  isDropdownOpen = false;

  constructor(private authService: AuthService, private router: Router, private toastr: ToastrService) { }
  menuVariable: boolean = false;
  menu_icon_variable: boolean = false;


  openMenu() {
    this.menuVariable = !this.menuVariable;
    this.menu_icon_variable = !this.menu_icon_variable;
  }
  isLoggedIn() {
    return this.authService.getToken();
  }
  logout() {
    this.router.navigateByUrl("/home/");
    this.toastr.info("Esperamos verte pronto de nuevo ", 'Se ha cerrado la sesión', {
      timeOut: 4000,
    });
    this.authService.logOut();
  }

  toggleDropdown() { //desplegable del header
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  getUserROL(): string | null {
    return localStorage.getItem('user_ROL');
  }
}

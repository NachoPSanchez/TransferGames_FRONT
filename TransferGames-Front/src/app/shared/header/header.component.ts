import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = 'header'
  isDropdownOpen = false;
 
 
 
  constructor(){}
  menuVariable:boolean = false;
menu_icon_variable:boolean= false;


openMenu(){
  this.menuVariable =! this.menuVariable ;
  this.menu_icon_variable =! this.menu_icon_variable;
}

cerrarSesion(){
  //introducir método para poder cerrar sesión
}

toggleDropdown() { //desplegable del header
  this.isDropdownOpen = !this.isDropdownOpen;
}

miPerfil(){
  
}
}

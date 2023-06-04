import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { LoginService } from 'src/app/core/services/login.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  rol!: string;

  constructor(private loginService: LoginService, private userService: UserService) {}

  ngOnInit(): void {
   if(this.loginService.getToken != null){
    this.userService.getByEmail
   }

   this.findRol();
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay:true,
    autoplayTimeout:1650,
    autoplayHoverPause:true,
    fluidSpeed: true,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      4080: {
        items: 4
      }
    },
    nav: false
  }

  findRol(){
    this.rol = this.userService.findRolUser();
    localStorage.setItem('user_ROL', this.rol);
  }
  
}

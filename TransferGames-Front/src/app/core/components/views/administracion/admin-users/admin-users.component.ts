import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { UserResponse } from 'src/app/core/models/user.interface';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {

  users: UserResponse[] = [];

  constructor(private userService: UserService, private sanitizer: DomSanitizer, private router:Router){}

  ngOnInit(): void {
    this.userService.getAll().subscribe(data=>{
      this.users = data;
    });
  }
  editUser(idUser: number | undefined){
    if(idUser != null){
      localStorage.setItem('editUser', idUser.toString());
    }
    this.router.navigate(['/administracion/usuarios/edit-user']);
  }
  getSafeImageUrl(imageBase64: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64,' + imageBase64);  
  }
}

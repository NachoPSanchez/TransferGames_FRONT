import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Toast, ToastrService } from 'ngx-toastr';
import { UserResponse } from 'src/app/core/models/user.interface';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user:UserResponse = {
    id: 0,
    name: '',
    email: '',
    image: '',
    password: '',
    roleId: ''
  }

  constructor(private userService: UserService, private router: Router, private sanitizer: DomSanitizer, private toastr: ToastrService){}

  ngOnInit(): void {
    const id: string | null = localStorage.getItem('editUser');
    if(id!=null){
      this.userService.getById(id).subscribe(data=>{
        this.user = data;
      });
    } 
  }

  getSafeImageUrl(imageBase64: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64,' + imageBase64);
  }

  backToUsers(){
    this.router.navigate(['/administracion/usuarios']);
  }
  editUser(){
    this.userService.updateUser(this.user).subscribe({
      next: () => {
        this.router.navigateByUrl("/administracion/usuarios");
        this.toastr.success("con exito", 'Usuario editado', {
          timeOut: 4000,
        });
      },
      error: (err) => {
        this.toastr.error(err.error.message, 'Error', {
          timeOut: 4000,
        });
      }
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserResponse } from 'src/app/core/models/user.interface';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-edit-perfil',
  templateUrl: './edit-perfil.component.html',
  styleUrls: ['./edit-perfil.component.css']
})
export class EditPerfilComponent implements OnInit {

  user: UserResponse = {} as UserResponse;
  id: any;

  constructor(private userService: UserService, private sanitizer: DomSanitizer, private router: Router, private toastr: ToastrService){}

  ngOnInit(): void {
    this.id = this.userService.findIdUser();
    this.userService.getById(this.id).subscribe(data => {
      this.user = data;
    });
  }

  getSafeImageUrl(imageBase64: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64,' + imageBase64);
  }
  editUser(){
    this.userService.updateUser(this.user).subscribe({
      next: () => {
        this.userService.getById(this.id).subscribe(data => {
          this.user = data;
        });
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

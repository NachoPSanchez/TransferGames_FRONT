import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Toast, ToastrService } from 'ngx-toastr';
import { UserResponse } from 'src/app/core/models/user.interface';
import { UserService } from 'src/app/core/services/user.service';
import { ConfirmBoxInitializer, DialogLayoutDisplay, DisappearanceAnimation, AppearanceAnimation } from '@costlydeveloper/ngx-awesome-popup';



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
    console.log(this.user.roleId); 
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


  openConfirmBox() {
    const newConfirmBox = new ConfirmBoxInitializer();

    newConfirmBox.setTitle('¿Desea editar el usuario con id 1?');
    newConfirmBox.setMessage('Esta acción es irreversible');

    // Choose layout color type
    newConfirmBox.setConfig({
    layoutType: DialogLayoutDisplay.WARNING, // SUCCESS | INFO | NONE | DANGER | WARNING
    animationIn: AppearanceAnimation.SLIDE_IN_DOWN, // BOUNCE_IN | SWING | ZOOM_IN | ZOOM_IN_ROTATE | ELASTIC | JELLO | FADE_IN | SLIDE_IN_UP | SLIDE_IN_DOWN | SLIDE_IN_LEFT | SLIDE_IN_RIGHT | NONE
    animationOut: DisappearanceAnimation.FLIP_OUT, // BOUNCE_OUT | ZOOM_OUT | ZOOM_OUT_WIND | ZOOM_OUT_ROTATE | FLIP_OUT | SLIDE_OUT_UP | SLIDE_OUT_DOWN | SLIDE_OUT_LEFT | SLIDE_OUT_RIGHT | NONE
    buttonPosition: 'right', // optional 
    });

    newConfirmBox.setButtonLabels('Si', 'No');

    // Simply open the popup and observe button click
    newConfirmBox.openConfirmBox$().subscribe(resp => {
      console.log('Button clicked: ', resp.clickedButtonID);
      if(resp.clickedButtonID == 'si'){
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
        console.log('Button clicked: ', resp.clickedButtonID);
      }
    });
}


}

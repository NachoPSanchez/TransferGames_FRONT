import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserResponse } from 'src/app/core/models/user.interface';
import { UserService } from 'src/app/core/services/user.service';
import { ConfirmBoxInitializer, DialogLayoutDisplay, DisappearanceAnimation, AppearanceAnimation } from '@costlydeveloper/ngx-awesome-popup';



@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {

  users: UserResponse[] = [];

  constructor(private userService: UserService, private sanitizer: DomSanitizer, private router:Router, private toastr: ToastrService){}

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


  deleteUser(id: number){
    let idUser = this.userService.findIdUser();
    if(idUser !== id){
      this.userService.deleteUser(id).subscribe({
        next: () => {
  
        },
        error: (err) => {
          this.toastr.error(err.error.message, 'Error', {
            timeOut: 4000,
          });
        },
        complete: () => {
          this.toastr.success("con exito", 'User eliminado', {
            timeOut: 4000,
          });
          this.userService.getAll().subscribe(data=>{
            this.users = data;
          });
        }
      });
    }else{
      this.toastr.info("No puedes eliminar tu propio user desde administración","Info");
    }
  }

  openConfirmBox(id: number) {
    const newConfirmBox = new ConfirmBoxInitializer();

    newConfirmBox.setTitle('¿Está seguro de que desea eliminar el usuario con id ' + id + ' ?');
    newConfirmBox.setMessage('Esta acción es irreversible');

    // Choose layout color type
    newConfirmBox.setConfig({
    layoutType: DialogLayoutDisplay.DANGER, // SUCCESS | INFO | NONE | DANGER | WARNING
    animationIn: AppearanceAnimation.SLIDE_IN_DOWN, // BOUNCE_IN | SWING | ZOOM_IN | ZOOM_IN_ROTATE | ELASTIC | JELLO | FADE_IN | SLIDE_IN_UP | SLIDE_IN_DOWN | SLIDE_IN_LEFT | SLIDE_IN_RIGHT | NONE
    animationOut: DisappearanceAnimation.FLIP_OUT, // BOUNCE_OUT | ZOOM_OUT | ZOOM_OUT_WIND | ZOOM_OUT_ROTATE | FLIP_OUT | SLIDE_OUT_UP | SLIDE_OUT_DOWN | SLIDE_OUT_LEFT | SLIDE_OUT_RIGHT | NONE
    buttonPosition: 'right', // optional 
    });

    newConfirmBox.setButtonLabels('Si', 'No');

    // Simply open the popup and observe button click
    newConfirmBox.openConfirmBox$().subscribe(resp => {
      console.log('Button clicked: ', resp.clickedButtonID);
      if(resp.clickedButtonID == 'si'){
        this.deleteUser(id);
        console.log('Button clicked: ', resp.clickedButtonID);
      }
    });
}




}

import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Juego } from 'src/app/core/models/juego.interface';
import { JuegoService } from 'src/app/core/services/juego.service';
import { ConfirmBoxInitializer, DialogLayoutDisplay, DisappearanceAnimation, AppearanceAnimation } from '@costlydeveloper/ngx-awesome-popup';


@Component({
  selector: 'app-edit-juego',
  templateUrl: './edit-juego.component.html',
  styleUrls: ['./edit-juego.component.css']
})
export class EditJuegoComponent implements OnInit {

  juego:Juego = {
    id:0,
    nombre:'',
    descripcion:'',
    direccion:'',
    image:''
  }

  constructor(private juegoService: JuegoService, private router: Router, private sanitizer: DomSanitizer, private toastr: ToastrService){}

  ngOnInit(): void {
    const id: string | null = localStorage.getItem('editGame');
    if(id!=null){
      this.juegoService.getById(id).subscribe(data=>{
        this.juego = data;
      });
    } 
  }

  getSafeImageUrl(imageBase64: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64,' + imageBase64);
  }

  backToJuegos(){
    this.router.navigate(['/administracion/juegos']);
  }
  editGame(){
    this.juegoService.updateJuego(this.juego).subscribe({
      next: () => {
        this.router.navigateByUrl("/administracion/juegos");
        this.toastr.success("con exito", 'Juego editado', {
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
    let id = localStorage.getItem('editGame');
    newConfirmBox.setTitle('¿Desea editar el juego con id ' + id + ' ?');
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
        this.editGame();
        console.log('Button clicked: ', resp.clickedButtonID);
      }
    });
}

}

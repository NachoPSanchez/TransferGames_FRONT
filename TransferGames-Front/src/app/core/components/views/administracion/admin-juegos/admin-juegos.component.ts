import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Juego } from 'src/app/core/models/juego.interface';
import { JuegoService } from 'src/app/core/services/juego.service';
import { ConfirmBoxInitializer, DialogLayoutDisplay, DisappearanceAnimation, AppearanceAnimation } from '@costlydeveloper/ngx-awesome-popup';

@Component({
  selector: 'app-admin-juegos',
  templateUrl: './admin-juegos.component.html',
  styleUrls: ['./admin-juegos.component.css']
})
export class AdminJuegosComponent implements OnInit {

  juegos: Juego[] = []

  constructor(private juegoService: JuegoService, private router: Router, private sanitizer: DomSanitizer, private toastr: ToastrService){}

  ngOnInit(): void {
    this.juegoService.giveJuego().subscribe(data=>{
      this.juegos = data;
    });
  }

  editGame(idGame: number | undefined){
    if(idGame != null){
      localStorage.setItem('editGame', idGame.toString());
    }
    this.router.navigate(['/administracion/juegos/edit-juego']);
  }
  getSafeImageUrl(imageBase64: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64,' + imageBase64);  
  }
  deleteGame(id: number){
      this.juegoService.deleteJuego(id).subscribe({
        next: () => {

        },
        error: (err) => {
          this.toastr.error(err.error.message, 'Error', {
            timeOut: 4000,
          });
        },
        complete: () => {
          this.toastr.success("con exito", 'Juego eliminado', {
            timeOut: 4000,
          });
          this.juegoService.giveJuego().subscribe(data=>{
            this.juegos = data;
          });
        }
      });
  }


  openConfirmBox(id: number) {
    const newConfirmBox = new ConfirmBoxInitializer();

    newConfirmBox.setTitle('¿Está seguro de que desea eliminar el juego con id ' + id + ' ?');
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
        this.deleteGame(id);
        console.log('Button clicked: ', resp.clickedButtonID);
      }
    });
}

}

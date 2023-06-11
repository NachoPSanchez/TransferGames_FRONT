import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Juego } from 'src/app/core/models/juego.interface';
import { JuegoService } from 'src/app/core/services/juego.service';

@Component({
  selector: 'app-admin-juegos',
  templateUrl: './admin-juegos.component.html',
  styleUrls: ['./admin-juegos.component.css']
})
export class AdminJuegosComponent implements OnInit {

  juegos: Juego[] = []

  constructor(private juegoService: JuegoService, private router: Router, private sanitizer: DomSanitizer){}

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

}

import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Juego } from 'src/app/core/models/juego.interface';
import { JuegoService } from 'src/app/core/services/juego.service';
import { NzButtonModule, NzButtonSize } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';


@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css']
})
export class JuegosComponent implements OnInit {

  juegos: Juego[] = [];
  size: NzButtonSize = 'large';
  isLoadingTwo = false;

  constructor(private juegoS: JuegoService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.juegoS.giveJuego().subscribe(data => {
      this.juegos = data;
      console.log(this.juegos);
    });
  }

  getSafeImageUrl(imageBase64: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64,' + imageBase64);
  }

  setActualGameId(gameId: number | undefined): void {
    if(gameId != null){
    localStorage.setItem('gameId',gameId.toString());
    }
  }

  loadTwo(gameId: number | undefined): void {
    this.isLoadingTwo = true;
    if(gameId != null){
      localStorage.setItem('gameId',gameId.toString());
      }
    setTimeout(() => {
      this.isLoadingTwo = false;
    }, 5000);
  }

 
  openGame(idGame: number){

  }
  
}

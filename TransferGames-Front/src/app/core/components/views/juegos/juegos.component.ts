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
  isLoadingOne = false;
  isLoadingTwo = false;

  panels = [
    
    {
      active: false,
      disabled: true,
      name: 'Descripción',
      icon: 'double-right',
      customStyle: {
        background: '#4b555e',
        color: '#ffffff',        
        border: '0px' ,
        
      }
    }
    
  ];



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

  setActualGameId(gameId: number): void {
    if(gameId != null){
    localStorage.setItem('gameId',gameId.toString());
    }
  }
  loadOne(gameId: number): void {
    if(gameId != null)
    this.isLoadingOne = true;
    this.setGameIdLocalStorage(gameId);    
    setTimeout(() => {
      this.isLoadingOne = false;
    }, 5000);
  }
  loadTwo(gameId: number): void {
    if(gameId != null)
    this.isLoadingTwo = true;
    this.setGameIdLocalStorage(gameId);    
    setTimeout(() => {
      this.isLoadingTwo = false;
    }, 5000);
  }

 
  setGameIdLocalStorage(gameId: number){
    if(gameId != null){
      localStorage.setItem('gameId',gameId.toString());
      }
  }
  
}

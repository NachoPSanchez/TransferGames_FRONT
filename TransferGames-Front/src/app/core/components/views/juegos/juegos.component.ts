import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Juego } from 'src/app/core/models/juego.interface';
import { JuegoService } from 'src/app/core/services/juego.service';
import { NzButtonModule, NzButtonSize } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { Router } from '@angular/router';



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



  constructor(private juegoS: JuegoService, private sanitizer: DomSanitizer, private router: Router) { }

  ngOnInit() {
    this.juegoS.giveJuego().subscribe(data => {
      this.juegos = data;
      console.log(this.juegos);
    });
  }

  getSafeImageUrl(imageBase64: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64,' + imageBase64);
  }

  setGameIdLocalStorage(gameId: number){
    if(gameId != null){
      localStorage.setItem('gameId',gameId.toString());
      }
  }

  setGameUrl(gameUrl: string){
    localStorage.setItem('gameUrl',gameUrl);
  }
  
  loadOne(gameId: number, gameUrl: string): void {
    if(gameId != null)
    this.isLoadingOne = true;
    this.setGameIdLocalStorage(gameId);
    this.setGameUrl(gameUrl);   
    setTimeout(() => {
      this.isLoadingOne = false;
      this.router.navigate(['RanaMan']);
    }, 3000);
  }

  loadTwo(gameId: number, gameUrl: string): void {
    if(gameId != null)
    this.isLoadingTwo = true;
    this.setGameIdLocalStorage(gameId);  
    this.setGameUrl(gameUrl);    
    setTimeout(() => {
      this.isLoadingTwo = false;
      this.router.navigate(['TransferJump']);
    }, 3000);
  }

 
 
  
}

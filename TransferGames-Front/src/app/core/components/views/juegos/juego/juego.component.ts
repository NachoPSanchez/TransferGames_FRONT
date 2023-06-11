import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent {
  urlJuego !: string | any  
  safeGameUrl !: any

  constructor(private sanitizer: DomSanitizer){ }

  ngOnInit(): void {
    this.urlJuego = localStorage.getItem('gameUrl');
    if(this.urlJuego != null){    
    this.safeGameUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.urlJuego);
    console.log(this.safeGameUrl);
    }
  }
 

}

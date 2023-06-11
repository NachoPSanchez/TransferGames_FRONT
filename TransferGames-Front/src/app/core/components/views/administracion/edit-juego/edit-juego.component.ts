import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Juego } from 'src/app/core/models/juego.interface';
import { JuegoService } from 'src/app/core/services/juego.service';

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
}

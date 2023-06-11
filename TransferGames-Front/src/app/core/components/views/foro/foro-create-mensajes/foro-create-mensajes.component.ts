import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Mensaje, Respuesta } from 'src/app/core/models/foro.interface';
import { UserResponse } from 'src/app/core/models/user.interface';
import { ForoService } from 'src/app/core/services/foro.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-foro-create-mensajes',
  templateUrl: './foro-create-mensajes.component.html',
  styleUrls: ['./foro-create-mensajes.component.css']
})
export class ForoCreateMensajesComponent implements OnInit {

  mensaje: Mensaje = {
    idMensaje: 0,
    asunto: '',
    texto: '',
    date: new Date,
    user: {} as UserResponse,
    respuestas: [] as Respuesta[]
  }

  constructor(private foroService: ForoService, private userService: UserService, private toastr: ToastrService, private router: Router){}

  ngOnInit(): void {
    
  }
  createMensaje(){
    let id = this.userService.findIdUser();
    this.foroService.createMensaje(id, this.mensaje).subscribe({
      next: () => {

      },
      error: (err) => {
        this.toastr.error(err.error.message, 'Error', {
          timeOut: 4000,
        });
      },
      complete: () => {
        this.router.navigateByUrl('/foro/mensajes');
        this.toastr.success("con exito", 'Mensaje creado', {
          timeOut: 4000,
        });
      }
    });
  }
}

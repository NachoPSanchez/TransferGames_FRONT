import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzButtonSize } from 'ng-zorro-antd/button';
import { ToastrService } from 'ngx-toastr';
import { Mensaje, Respuesta } from 'src/app/core/models/foro.interface';
import { UserResponse } from 'src/app/core/models/user.interface';
import { ForoService } from 'src/app/core/services/foro.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-foro-mensajes',
  templateUrl: './foro-mensajes.component.html',
  styleUrls: ['./foro-mensajes.component.css']
})
export class ForoMensajesComponent implements OnInit {

  mensajes: Mensaje[] = [];
  respuestas: Respuesta[] = [];
  nuevaRespuesta: Respuesta={
    id: 0,
    titulo: '',
    respuesta: '',
    date: new Date,
    mensaje: undefined,
    user: undefined
  }
  user: UserResponse = {
    id: 0,
    name: '',
    email: '',
    password: '',
    roleId: '',
    image:''
  }
  size: NzButtonSize = 'large';
  isLoadingOne = false;
  isLoadingTwo = false;

  panels = [
    
    {
      active: false,
      disabled: true,
      name: 'Respuestas',
      icon: 'double-right',
      customStyle: {
        background: '#4b555e',
        color: '#ffffff',        
        border: '0px' ,
        
      }
    }
    
  ];

  constructor(private foroService: ForoService, private router: Router, private toastr: ToastrService, private userService: UserService){}

  ngOnInit(): void {
    this.foroService.getMensajes().subscribe(data => {
      this.mensajes = data;
      for(const mensaje of this.mensajes){
        this.respuestas = mensaje.respuestas;
        this.user = mensaje.user;
      }
    });
  }

  enviarRespuesta(idMensaje: number){
    let id = this.userService.findIdUser();
    this.foroService.createRespuesta(id, idMensaje, this.nuevaRespuesta).subscribe({
      next: () => {
        this.foroService.getMensajes().subscribe(data => {
          this.mensajes = data;
          for(const mensaje of this.mensajes){
            this.respuestas = mensaje.respuestas;
            this.user = mensaje.user;
          }
        });
        this.toastr.success("con exito", 'Respuesta creada', {
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

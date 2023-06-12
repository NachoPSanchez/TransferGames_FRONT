import { Component, OnInit } from '@angular/core';
import { Mensaje } from 'src/app/core/models/foro.interface';
import { ForoService } from 'src/app/core/services/foro.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-foro-mis-mensajes',
  templateUrl: './foro-mis-mensajes.component.html',
  styleUrls: ['./foro-mis-mensajes.component.css']
})
export class ForoMisMensajesComponent implements OnInit {

  mensajes: Mensaje[] = [];

  constructor(private foroService: ForoService, private userService: UserService){}

  ngOnInit(): void {
    let id = this.userService.findIdUser();
    this.foroService.findAllMensajesByIdUser(id).subscribe(data => {
      this.mensajes = data;
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { Respuesta } from 'src/app/core/models/foro.interface';
import { ForoService } from 'src/app/core/services/foro.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-foro-mis-respuestas',
  templateUrl: './foro-mis-respuestas.component.html',
  styleUrls: ['./foro-mis-respuestas.component.css']
})
export class ForoMisRespuestasComponent implements OnInit {

  respuestas: Respuesta[] = [];

  constructor(private foroService: ForoService, private userService: UserService){}

  ngOnInit(): void {
    let id = this.userService.findIdUser();
    this.foroService.findAllRespuestasByIdUser(id).subscribe(data => {
      this.respuestas = data;
      console.log(this.respuestas);
    });
  }

}

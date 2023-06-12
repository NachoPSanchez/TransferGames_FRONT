import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mensaje, Respuesta } from '../models/foro.interface';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class ForoService {

  constructor(private http: HttpClient) { }

  getMensajes(): Observable<Mensaje[]>{
    let url = environment.baseUrl + '/users/mensajes';
    return this.http.get<Mensaje[]>(url);
  }
  createRespuesta(idUser: number, idMensaje: number, respuesta: Respuesta): Observable<Respuesta>{
    let url = environment.baseUrl + '/users/' + idUser + '/mensajes/' + idMensaje + '/respuestas';
    return this.http.post<Respuesta>(url, respuesta);
  }
  createMensaje(idUser: number, mensaje: Mensaje): Observable<Mensaje>{
    let url = environment.baseUrl + '/users/' + idUser + '/mensajes/';
    return this.http.post<Mensaje>(url, mensaje);
  }
  findAllMensajesByIdUser(idUser: number): Observable<Mensaje[]> {
    let url = environment.baseUrl + '/users/' + idUser + '/mensajes';
    return this.http.get<Mensaje[]>(url);
  }
  findAllRespuestasByIdUser(idUser: number): Observable<Respuesta[]> {
    let url = environment.baseUrl + '/users/' + idUser + '/mensajes/respuestas';
    return this.http.get<Respuesta[]>(url);
  }
}

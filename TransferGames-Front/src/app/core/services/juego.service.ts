import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment';
import { Juego } from '../models/juego.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JuegoService {

  baseUrl = environment.baseUrl + '/juego';

  constructor(private http : HttpClient) { }

  giveJuego(): Observable<Juego[]> {
    let url = environment.baseUrl+'/juego';
    return this.http.get<Juego[]>(url);
  }
  getById(id: string):Observable<Juego>{
    return this.http.get<Juego>(`${this.baseUrl}/${id}`);
  }
  updateJuego(juego: Juego): Observable<Juego>{
    return this.http.put<Juego>(`${this.baseUrl}/${juego.id}`, juego);
  }

}

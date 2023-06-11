import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment';
import { Juego } from '../models/juego.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JuegoService {

  constructor(private http : HttpClient) { }

  giveJuego(): Observable<Juego[]> {
    let url = environment.baseUrl+'/juego';
    return this.http.get<Juego[]>(url);
  }


}

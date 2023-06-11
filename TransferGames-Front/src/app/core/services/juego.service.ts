import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment';
import { Juego } from '../models/juego.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JuegoService {

  baseUrl = environment.baseUrl + '/juego';
  baseAdminUrl = environment.baseUrl + '/admin/juego';

  constructor(private http : HttpClient) { }

  giveJuego(): Observable<Juego[]> {
    let url = environment.baseUrl+'/juego';
    return this.http.get<Juego[]>(url);
  }
  getById(id: string):Observable<Juego>{
    return this.http.get<Juego>(`${this.baseUrl}/${id}`);
  }
  updateJuego(juego: Juego): Observable<Juego>{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization',`Bearer ${token}`);
    return this.http.put<Juego>(`${this.baseAdminUrl}/${juego.id}`, juego, {headers});
  }
  deleteJuego(id:number): Observable<Juego> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization',`Bearer ${token}`);
    return this.http.delete<Juego>(`${this.baseAdminUrl}/${id}`, {headers});
  }
}

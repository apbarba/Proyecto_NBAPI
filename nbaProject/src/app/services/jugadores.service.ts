import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JugadoresResponse } from '../Interfaces/jugadores.interface';

@Injectable({
  providedIn: 'root'
})
export class JugadoresService {

  constructor(private http: HttpClient) { }

 // public playersList(): Observable<JugadoresResponse>{

   // return this.http.get<JugadoresResponse>(`${environment.apiBaseUrl}/players?`)
  //}

  getPlayers(year : string): Observable<JugadoresResponse>{

   return this.http.get<JugadoresResponse>(`${environment.apiBaseUrl}/data/10s/prod/v1/${year}/players.json`);

  }
}

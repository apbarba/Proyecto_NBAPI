import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JugadoresResponse } from '../Interfaces/jugadores-interface';

@Injectable({
  providedIn: 'root'
})
export class JugadoresService {

  constructor(private http: HttpClient) { }

 // public playersList(): Observable<JugadoresResponse>{

   // return this.http.get<JugadoresResponse>(`${environment.apiBaseUrl}/players?`)
  //}

  getPlayers(page: number): Observable<JugadoresResponse>{

   return this.http.get<JugadoresResponse>(`${environment.apiBaseUrl}/jugadores?page=${page}`);

  }
}

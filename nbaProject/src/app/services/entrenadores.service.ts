import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EntrenadoresResponse } from '../Interfaces/entrenadores.interface';

@Injectable({
  providedIn: 'root'
})
export class EntrenadoresService {

  constructor(private http: HttpClient) { }

  getCoaches(year: string): Observable<EntrenadoresResponse>{

    return this.http.get<EntrenadoresResponse>(`${environment.apiBaseUrl}/data/10s/prod/v1/${year}/coaches.json`);

  }
}

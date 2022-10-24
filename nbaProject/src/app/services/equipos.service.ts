import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { EquiposResponse } from '../interfaces/equipos';

@Injectable({
  providedIn: 'root',
})
export class EquiposService {
  constructor(private http: HttpClient) {}

  public getListaEquipos(year: string):Observable<EquiposResponse>{
    return this.http.get<EquiposResponse>(`${environment.apiBaseUrl}/data/10s/prod/v1/${year}/teams.json`)
  }

}

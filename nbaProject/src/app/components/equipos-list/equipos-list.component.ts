import { Component, OnInit } from '@angular/core';
import { Equipo } from 'src/app/interfaces/equipos';
import { EquiposService } from 'src/app/services/equipos.service';

@Component({
  selector: 'app-equipos-list',
  templateUrl: './equipos-list.component.html',
  styleUrls: ['./equipos-list.component.css']
})
export class EquiposListComponent implements OnInit {

  listaEquipos : Equipo[] = [];

  constructor(private equiposService:EquiposService) { }

  ngOnInit(): void {
    this.getListaEquipos("2022")
  }

  public getListaEquipos(year : string){
    this.equiposService.getListaEquipos(year).subscribe(resp =>{
      this.listaEquipos = resp.league.standard
    })
  }

}

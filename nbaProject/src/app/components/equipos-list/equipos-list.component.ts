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
  anoElegido ="2022"
  anosPosibles = ["2012","2013","2014","2015","2016","2017","2018","2019","2020","2022"]

  constructor(private equiposService:EquiposService) { }

  ngOnInit(): void {
    this.getListaEquipos(this.anoElegido)
  }

  public getListaEquipos(year : string){
    this.equiposService.getListaEquipos(year).subscribe(resp =>{
      this.listaEquipos = resp.league.standard
    })
  }

  public getImgEquipo(equipo : Equipo){
    return `https://cdn.nba.com/logos/nba/${equipo.teamId}/global/L/logo.svg`
  }

}

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Equipo } from 'src/app/Interfaces/equipos';
import { Player } from 'src/app/Interfaces/jugadores.interface';
import { EquiposService } from 'src/app/services/equipos.service';
import { JugadoresService } from 'src/app/services/jugadores.service';
import { EquiposDialogComponent } from './equipos-dialog/equipos-dialog.component';

@Component({
  selector: 'app-equipos-list',
  templateUrl: './equipos-list.component.html',
  styleUrls: ['./equipos-list.component.css'],
})
export class EquiposListComponent implements OnInit {
  listaEquipos: Equipo[] = [];
  anoElegido = '2022';
  anosPosibles = [
    '2012',
    '2013',
    '2014',
    '2015',
    '2016',
    '2017',
    '2018',
    '2019',
    '2020',
    '2022',
  ];
  jugadoresEquipo: Player[] = [];

  constructor(
    private equiposService: EquiposService,
    private jugadoresService: JugadoresService,
    private dialog : MatDialog
  ) {}

  ngOnInit(): void {
    this.getListaEquipos(this.anoElegido);
  }

  public getListaEquipos(year: string) {
    this.equiposService.getListaEquipos(year).subscribe((resp) => {
      this.listaEquipos = resp.league.standard;
    });
  }

  public getImgEquipo(equipo: Equipo) {
    return `https://cdn.nba.com/logos/nba/${equipo.teamId}/global/L/logo.svg`;
  }

  public getJugadoresEquipo(equipo: Equipo) {
    this.jugadoresEquipo = []
    let playersList: Player[] = [];

    this.jugadoresService.getPlayers(this.anoElegido).subscribe((resp) => {
      playersList = resp.league.standard;
      for (let player of playersList) {
        if (player.teamId == equipo.teamId) {
          this.jugadoresEquipo.push(player);
        }
      }
      this.dialog.open(EquiposDialogComponent,{
        width: '250px',
        enterAnimationDuration: '3000ms',
        exitAnimationDuration: '1500ms',
        data:{
          datosEquipo: equipo,
          jugadoresEquipo: this.jugadoresEquipo,
        }
      });
    });
  }
}

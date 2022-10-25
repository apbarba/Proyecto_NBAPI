import { Component, OnInit } from '@angular/core';
import { Players } from 'src/app/Interfaces/jugadores.interface';
import { JugadoresService } from 'src/app/services/jugadores.service';

@Component({
  selector: 'app-jugadores-list',
  templateUrl: './jugadores-list.component.html',
  styleUrls: ['./jugadores-list.component.css']
})
export class JugadoresListComponent implements OnInit {

  playersList: Players[] = [];
  lista2: Players[] = [];
  numPages = 0;
  anio = '2022';
  pageActual = 1;
  anios = ['2003', '2006','2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'];

  constructor(private playersService: JugadoresService) { }

  ngOnInit(): void {

   this.getPlayersPage(this.anio); 

  }
  

  mostrarImg(players: Players){

    let id = players.personId;

    return `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${id}.png`

  }

  getPlayersPage(year: string){

    this.playersService.getPlayers(year).subscribe((resp)=> {

     this.playersList = resp.league.standard;
     

    });

  }


}

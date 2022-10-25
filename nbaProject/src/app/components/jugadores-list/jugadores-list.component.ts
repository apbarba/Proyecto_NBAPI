import { Component, OnInit } from '@angular/core';
import Player from 'src/app/Interfaces/jugadores.interface';
import { JugadoresService } from 'src/app/services/jugadores.service';

@Component({
  selector: 'app-jugadores-list',
  templateUrl: './jugadores-list.component.html',
  styleUrls: ['./jugadores-list.component.css']
})
export class JugadoresListComponent implements OnInit {

  playersList: Player[] = [];
  anoElegido ="2022"
  anosPosibles = ["2012","2013","2014","2015","2016","2017","2018","2019","2020","2022"]
  numPages = 0;

  constructor(private playersService: JugadoresService) { }

  ngOnInit(): void {

   this.getPlayersPage(this.anoElegido);

  }


  mostrarImg(players: Player){

    let id = players.personId;

    return `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${id}.png`

  }

  getPlayersPage(year:string){

    this.playersService.getPlayers(year).subscribe((resp)=> {

     this.playersList = resp.league.standard;


    });

  }

}

import { Component, OnInit } from '@angular/core';
import { JugadoresResponse, League, Players } from 'src/app/Interfaces/jugadores-interface';
import { JugadoresService } from 'src/app/services/jugadores.service';

@Component({
  selector: 'app-jugadores-list',
  templateUrl: './jugadores-list.component.html',
  styleUrls: ['./jugadores-list.component.css']
})
export class JugadoresListComponent implements OnInit {

  playersList: Players[] = [];
  numPages = 0;

  constructor(private playersService: JugadoresService) { }

  ngOnInit(): void {

    this.getPlayersPage(1);

  }

  mostrarImg(players: Players){

    let id = players.personId.split("/")[5]

    return `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${id}.png`

  }

  getPlayersPage(page: number){

    this.playersService.getPlayers(page).subscribe(resp => {

      this.playersList = resp.results;
      this.numPages = Math.ceil(resp.count / 10);

    });

  }

  counter(){

    return new Array(this.numPages);

  }

}

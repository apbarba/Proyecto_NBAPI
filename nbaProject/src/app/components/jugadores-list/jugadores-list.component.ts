import { Component, OnInit } from '@angular/core';
import { JugadoresResponse, League } from 'src/app/Interfaces/jugadores-interface';
import { JugadoresService } from 'src/app/services/jugadores.service';

@Component({
  selector: 'app-jugadores-list',
  templateUrl: './jugadores-list.component.html',
  styleUrls: ['./jugadores-list.component.css']
})
export class JugadoresListComponent implements OnInit {

  playersList: League[] = [];

  constructor(private playersService: JugadoresService) { }

  ngOnInit(): void {
  }

}

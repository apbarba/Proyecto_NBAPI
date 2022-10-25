import { Component, OnInit } from '@angular/core';
import { Entrenadores } from 'src/app/Interfaces/entrenadores.interface';
import { EntrenadoresService } from 'src/app/services/entrenadores.service';

@Component({
  selector: 'app-entrenadores-list',
  templateUrl: './entrenadores-list.component.html',
  styleUrls: ['./entrenadores-list.component.css']
})
export class EntrenadoresListComponent implements OnInit {

  entrenadoresList: Entrenadores[] = [];
  anio = '2022';
  pageActual = 1;
  anios = ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'];
 
  constructor(private entrenadorService: EntrenadoresService) { }

  ngOnInit(): void {

    this.getPaginacion(this.anio);

  }

  mostrarImg(entrenador: Entrenadores){

    let id = entrenador.personId;

    return `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${id}.png`
  
  }

  getPaginacion(year: string){

    this.entrenadorService.getCoaches(year).subscribe((resp) => {

      this.entrenadoresList = resp.league.standard;

    });
  }

}

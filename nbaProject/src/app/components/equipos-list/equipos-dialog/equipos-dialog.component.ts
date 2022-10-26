import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InfoEquipo } from 'src/app/Interfaces/equipos';

@Component({
  selector: 'app-equipos-dialog',
  templateUrl: './equipos-dialog.component.html',
  styleUrls: ['./equipos-dialog.component.css']
})
export class EquiposDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data : InfoEquipo) { }

  ngOnInit(): void {
  }

}

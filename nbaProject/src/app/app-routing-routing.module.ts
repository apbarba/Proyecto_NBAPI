import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquiposListComponent } from './components/equipos-list/equipos-list.component';
import { JugadoresListComponent } from './components/jugadores-list/jugadores-list.component';

const routes: Routes = [
  {path: 'jugadores-list', component: JugadoresListComponent},
  {path: 'equipos-list', component: EquiposListComponent},
  {path: '', redirectTo: '/jugadores-list', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingRoutingModule { }

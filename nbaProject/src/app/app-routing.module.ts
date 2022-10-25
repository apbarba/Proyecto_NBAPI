import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntrenadoresListComponent } from './components/entrenadores-list/entrenadores-list.component';
import { JugadoresListComponent } from './components/jugadores-list/jugadores-list.component';

const routes: Routes = [
  {path: 'jugadores', component: JugadoresListComponent },
  {path: 'entrenadores', component: EntrenadoresListComponent}
 // {path: 'equipos-list', component: EquiposListComponent},
  //{path: '', redirectTo: '/jugadores-list', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

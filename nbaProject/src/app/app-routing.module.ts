import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JugadoresListComponent } from './components/jugadores-list/jugadores-list.component';

const routes: Routes = [
  {path: 'jugadores', component: JugadoresListComponent },
 // {path: 'equipos-list', component: EquiposListComponent},
  //{path: '', redirectTo: '/jugadores-list', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

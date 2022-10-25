import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntrenadoresListComponent } from './components/entrenadores-list/entrenadores-list.component';
import { EquiposListComponent } from './components/equipos-list/equipos-list.component';
import { JugadoresListComponent } from './components/jugadores-list/jugadores-list.component';


const routes: Routes = [
  {path: 'jugadores', component: JugadoresListComponent },
  {path: 'entrenadores', component: EntrenadoresListComponent},
  {path: 'equipos', component: EquiposListComponent},

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

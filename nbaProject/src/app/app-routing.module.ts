import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquiposListComponent } from './components/equipos-list/equipos-list.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { EntrenadoresListComponent } from './components/entrenadores-list/entrenadores-list.component';
import { JugadoresListComponent } from './components/jugadores-list/jugadores-list.component';


const routes: Routes = [
  { path: '', component: MainMenuComponent },
  { path: 'equipos', component: EquiposListComponent },
  { path: 'jugadores', component: JugadoresListComponent },
  { path: 'entrenadores', component: EntrenadoresListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

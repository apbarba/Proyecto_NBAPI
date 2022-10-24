import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquiposListComponent } from './components/equipos-list/equipos-list.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';


const routes: Routes = [
  { path: '', component: MainMenuComponent },
  { path: 'equipos', component: EquiposListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

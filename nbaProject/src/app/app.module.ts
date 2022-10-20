import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JugadoresListComponent } from './components/jugadores-list/jugadores-list.component';
import { EquiposListComponent } from './components/equipos-list/equipos-list.component';

@NgModule({
  declarations: [
    AppComponent,
    JugadoresListComponent,
    EquiposListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

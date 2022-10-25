import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JugadoresListComponent } from './components/jugadores-list/jugadores-list.component';
import { EquiposListComponent } from './components/equipos-list/equipos-list.component';
import { MaterialsImportModule } from './materials-import/materials-import.module';
import { AppRoutingModule } from './app-routing.module';
import { EntrenadoresListComponent } from './components/entrenadores-list/entrenadores-list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FlexLayoutModule } from "@angular/flex-layout";


@NgModule({
  declarations: [
    AppComponent,
    JugadoresListComponent,
    EquiposListComponent,
    EntrenadoresListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialsImportModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialsImportModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JugadoresListComponent } from './components/jugadores-list/jugadores-list.component';
import { EquiposListComponent } from './components/equipos-list/equipos-list.component';
import { MaterialsImportModule } from './materials-import/materials-import.module';
import { AppRoutingModule } from './app-routing.module';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ObtenerImgPipe } from './pipes/obtener-img.pipe';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EquiposDialogComponent } from './components/equipos-list/equipos-dialog/equipos-dialog.component';
import { EntrenadoresListComponent } from './components/entrenadores-list/entrenadores-list.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    JugadoresListComponent,
    EquiposListComponent,
    MainMenuComponent,
    ObtenerImgPipe,
    EquiposDialogComponent,
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
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

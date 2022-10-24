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

@NgModule({
  declarations: [
    AppComponent,
    JugadoresListComponent,
    EquiposListComponent,
    MainMenuComponent,
    ObtenerImgPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialsImportModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

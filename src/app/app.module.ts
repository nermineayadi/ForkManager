import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThemeComponent } from './theme/theme.component';
import { PagesComponent } from './pages/pages.component';
import { ReprestComponent } from './pages/represt/represt.component';
import { ControlgestionComponent } from './pages/controlgestion/controlgestion.component';
import { BarmanComponent } from './pages/barman/barman.component';
import { ServeurComponent } from './pages/serveur/serveur.component';
import { PortionneurComponent } from './pages/portionneur/portionneur.component';
import { RespcomptoireComponent } from './pages/respcomptoire/respcomptoire.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbSidebarService } from '@nebular/theme';
import { CuisinierComponent } from './pages/cuisinier/cuisinier.component';

@NgModule({
  declarations: [
    AppComponent,
    ThemeComponent,
    PagesComponent,
    CuisinierComponent,
    ReprestComponent,
    ControlgestionComponent,
    BarmanComponent,
    ServeurComponent,
    PortionneurComponent,
    RespcomptoireComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbSidebarModule
  ],
  providers: [NbSidebarService],
  bootstrap: [AppComponent]
})
export class AppModule { }

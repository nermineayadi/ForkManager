import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
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
import { CuisinierComponent } from './pages/cuisinier/cuisinier.component';
import { GrowlModule } from 'primeng/primeng';
import {MatIconModule} from '@angular/material/icon';
import {AccordionModule} from 'primeng/accordion';   
import {MatCheckboxModule,MatInputModule,MatProgressSpinnerModule,MatCardModule,MatMenuModule, } from '@angular/material';
import {SidebarModule} from 'primeng/sidebar';
import {MatButtonModule} from '@angular/material/button';
import { NavigationComponent } from './navigation/navigation.component';
import { NavbarComponent } from './navbar/navbar.component';
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
    RespcomptoireComponent,
    NavigationComponent,
    NavbarComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    GrowlModule,
    AccordionModule,
    SidebarModule,MatButtonModule,
    
    MatCheckboxModule,MatInputModule,MatProgressSpinnerModule,MatCardModule,MatMenuModule, MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import {MatToolbarModule} from '@angular/material/toolbar';
=======
import { HttpClientModule } from '@angular/common/http';
>>>>>>> 1b71fc858c313b56cf357d899b0f2d162bc9bdf5
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
<<<<<<< HEAD
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
=======
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbSidebarService } from '@nebular/theme';
import { CuisinierComponent } from './pages/cuisinier/cuisinier.component';
import { LoginComponent } from './auth/login/login.component';
import {MatangModule  } from "../assets/matang.module";

>>>>>>> 1b71fc858c313b56cf357d899b0f2d162bc9bdf5
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
<<<<<<< HEAD
    RespcomptoireComponent,
    NavigationComponent,
    NavbarComponent
    
    
=======
    RespcomptoireComponent,LoginComponent, 
>>>>>>> 1b71fc858c313b56cf357d899b0f2d162bc9bdf5
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    BrowserAnimationsModule,
    MatToolbarModule,
    GrowlModule,
    AccordionModule,
    SidebarModule,MatButtonModule,
    
    MatCheckboxModule,MatInputModule,MatProgressSpinnerModule,MatCardModule,MatMenuModule, MatIconModule
=======
    MatangModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbSidebarModule,    
    HttpClientModule, 
>>>>>>> 1b71fc858c313b56cf357d899b0f2d162bc9bdf5
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

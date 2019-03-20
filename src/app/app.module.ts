import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
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
import {AccordionModule} from 'primeng/accordion';   
import {SidebarModule} from 'primeng/sidebar';
import {MatButtonModule} from '@angular/material/button';
import { NavigationComponent } from './navigation/navigation.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './auth/login/login.component';
import {MatangModule  } from "../assets/matang.module";
import * as $ from 'jquery';
import { InscriptionComponent } from './auth/inscription/inscription.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { RecetteComponent } from './pages/cuisinier/recette/recette.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CplatComponent } from './modals/CrudPlat/CPlat/cplat.component';

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
    NavigationComponent,
    NavbarComponent,
    InscriptionComponent,
    SearchbarComponent,
    RespcomptoireComponent,
    LoginComponent,
    RecetteComponent,CplatComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    GrowlModule,
    AccordionModule,
    SidebarModule,MatButtonModule,
    FormsModule, ReactiveFormsModule,MatFormFieldModule,
    MatangModule, 
    HttpClientModule, 
    FlexLayoutModule
    
  ],
  entryComponents:[CplatComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

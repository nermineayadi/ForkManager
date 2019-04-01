import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { PagesRoutingModule } from "./pages-routing.module";

import { ResponsableComponent } from "./responsable/responsable.component";
import { ServeurComponent } from "./serveur/serveur.component";
import { ComptoireComponent } from "./comptoire/comptoire.component";
import { BarmanComponent } from "./barman/barman.component";


//navigation
import { NavBarModule } from '../navbar/navbar.module';//module impoté pourqu'on trouve pas l'erreur de composant appelé dans 2 modules
//flex
import { FlexLayoutModule } from '@angular/flex-layout';

import { PagesComponent } from './pages.component';

@NgModule({
  declarations: [

    PagesComponent,
   
    ServeurComponent,
    ComptoireComponent,

     

  ],
  imports: [
    CommonModule, RouterModule,
     PagesRoutingModule,
     //flex
     FlexLayoutModule
    ],
  exports: [],
  providers: []
})
export class PagesModule {}

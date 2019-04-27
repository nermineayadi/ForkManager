import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { PagesRoutingModule } from "./pages-routing.module";

import { ResponsableComponent } from "./responsable/responsable.component";
import { ServeurComponent } from "./serveur/serveur.component";
import { BarmanComponent } from "./barman/barman.component";
//mattab
import {MatTabsModule} from '@angular/material/tabs';

//navigation
import { NavBarModule } from '../navbar/navbar.module';//module impoté pourqu'on trouve pas l'erreur de composant appelé dans 2 modules
//flex
import { FlexLayoutModule } from '@angular/flex-layout';

import { PagesComponent } from './pages.component';
import { MatangModule } from 'src/assets/matang.module';
import { NavbarComponent } from '../navbar/navbar.component';

@NgModule({
  declarations: [
    PagesComponent,
   

     

  ],
  imports: [
    CommonModule, RouterModule,
     PagesRoutingModule,
     MatangModule,
     //flex
     FlexLayoutModule
    ],
  exports: [],
  providers: []
})
export class PagesModule {}

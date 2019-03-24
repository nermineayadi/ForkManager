import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ControleRoutingModule } from "./controle-routing.module";
import { ControleComponent } from "./controle.component";
import { NavBarModule } from "src/app/navbar/navbar.module";

import { PlatControleComponent } from "./plat-controle/plat-controle.component";
import { MenuControleComponent } from "./menu-controle/menu-controle.component";
import { ReservationControleComponent } from "./reservation-controle/reservation-controle.component";
import { PortionControleComponent } from "./portion-controle/portion-controle.component";
import { BoissonControleComponent } from "./boisson-controle/boisson-controle.component";
import { PersonnelControleComponent } from "./personnel-controle/personnel-controle.component";
import { AcceuilControleComponent } from '../controle/acceuil-controle/acceuil-controle.component';
import { NavigationControleComponent } from 'src/app/navigation/navigation-controle/navigation-controle.component';
import { MatangModule } from 'src/assets/matang.module';
@NgModule({
  declarations: [ControleComponent,AcceuilControleComponent,
    PlatControleComponent,
    MenuControleComponent,
    ReservationControleComponent,
    PortionControleComponent,
    BoissonControleComponent,
    PersonnelControleComponent,
    NavigationControleComponent,
  ],
  imports: [
    CommonModule,
    ControleRoutingModule,
    MatangModule, 
    NavBarModule,


    
  ],
  exports: [],
  providers: []
})
export class ControleModule {}

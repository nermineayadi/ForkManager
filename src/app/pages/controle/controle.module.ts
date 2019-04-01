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
//calendar
import { CalendarModule, DateAdapter } from "angular-calendar";
import { adapterFactory } from "angular-calendar/date-adapters/date-fns";
import { NgbModule, NgbModalModule } from "@ng-bootstrap/ng-bootstrap";
import { FlatpickrModule } from "angularx-flatpickr";
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavigationCuisineComponent } from 'src/app/navigation/navigation-cuisine/navigation-cuisine.component';
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
//calendar
FlatpickrModule,
FlatpickrModule.forRoot(),
NgbModalModule,
NgbModule,
CalendarModule.forRoot({
  provide: DateAdapter,
  useFactory: adapterFactory
}),  
//flex
FlexLayoutModule,

    
  ],
  exports: [],
  providers: []
})
export class ControleModule {}

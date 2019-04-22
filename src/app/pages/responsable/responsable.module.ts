import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ResponsableRoutingModule } from "./responsable-routing.module";
import { ResponsableComponent } from "./responsable.component";
import { AcceuilResponsableComponent } from "./acceuil-responsable/acceuil-responsable.component";
import { PlatResponsableComponent } from "./plat-responsable/plat-responsable.component";
import { BoissonResponsableComponent } from "./boisson-responsable/boisson-responsable.component";
import { PortionResponsableComponent } from "./portion-responsable/portion-responsable.component";
import { ReservationResponsableComponent } from "./reservation-responsable/reservation-responsable.component";
import { PersonnelResponsableComponent } from "./personnel-responsable/personnel-responsable.component";
import { MenuResponsableComponent } from "./menu-responsable/menu-responsable.component";
import { InventaireResponsableComponent } from "./inventaire-responsable/inventaire-responsable.component";
import { NavigationResponsableComponent } from "src/app/navigation/navigation-responsable/navigation-responsable.component";
import { NavBarModule } from 'src/app/navbar/navbar.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatangModule } from 'src/assets/matang.module';
import {MatTableModule} from '@angular/material/table';
//calendar
import { CalendarModule, DateAdapter } from "angular-calendar";
import { adapterFactory } from "angular-calendar/date-adapters/date-fns";
import { NgbModule, NgbModalModule } from "@ng-bootstrap/ng-bootstrap";
import { FlatpickrModule } from "angularx-flatpickr";
import { CPersonnelService } from 'src/app/modals/CrudPersonnel/cpersonnel/cpersonnel.service';
import { PlatResponsableService } from './plat-responsable/plat-responsable.service';
import { DetailPService } from './plat-responsable/modals/detail-p/detail-p.service';
import { CPlatService } from './plat-responsable/modals/CPlat/cplat.service';
NavigationResponsableComponent;
@NgModule({
  declarations: [
    ResponsableComponent,
    PersonnelResponsableComponent,
    ReservationResponsableComponent,
    PortionResponsableComponent,
    MenuResponsableComponent,
    BoissonResponsableComponent,
    AcceuilResponsableComponent,
    PlatResponsableComponent,
    InventaireResponsableComponent,
    NavigationResponsableComponent,
    
  ],
  imports: [CommonModule, ResponsableRoutingModule ,
    NavBarModule,FlexLayoutModule ,MatangModule,MatTableModule,
    //calendar
    FlatpickrModule,
    FlatpickrModule.forRoot(),
    NgbModalModule,
    NgbModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),  
],
  exports: [],
  providers: [CPersonnelService,PlatResponsableService,DetailPService,CPlatService]
})
export class ResponsableModule {}

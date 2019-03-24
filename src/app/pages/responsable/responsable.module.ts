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
    NavigationResponsableComponent
  ],
  imports: [CommonModule, ResponsableRoutingModule ,
    NavBarModule,FlexLayoutModule ,MatangModule
],
  exports: [],
  providers: []
})
export class ResponsableModule {}

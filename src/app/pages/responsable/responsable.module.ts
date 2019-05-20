import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ResponsableRoutingModule } from "./responsable-routing.module";
import { ResponsableComponent } from "./responsable.component";
import { AcceuilResponsableComponent } from "./acceuil-responsable/acceuil-responsable.component";
import { PlatResponsableComponent } from "./plat-responsable/plat-responsable.component";
import { BoissonResponsableComponent } from "./boisson-responsable/boisson-responsable.component";
import { ReservationResponsableComponent } from "./reservation-responsable/reservation-responsable.component";
import { PersonnelResponsableComponent } from "./personnel-responsable/personnel-responsable.component";
import { SrecettesResponsableComponent } from "./srecette-responsable/srecette-responsable.component";
import { InventaireResponsableComponent } from "./inventaire-responsable/inventaire-responsable.component";
import { NavigationResponsableComponent } from "src/app/navigation/navigation-responsable/navigation-responsable.component";
import { NavBarModule } from 'src/app/navbar/navbar.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatangModule } from 'src/assets/matang.module';
import { MatTableModule } from '@angular/material/table';
IngredientResponsableComponent

//calendar
import { CalendarModule, DateAdapter } from "angular-calendar";
import { adapterFactory } from "angular-calendar/date-adapters/date-fns";
import { NgbModule, NgbModalModule } from "@ng-bootstrap/ng-bootstrap";
import { FlatpickrModule } from "angularx-flatpickr";
import { CPersonnelService } from 'src/app/modals/CrudPersonnel/cpersonnel/cpersonnel.service';
import { PlatResponsableService } from './plat-responsable/plat-responsable.service';
import { DetailPService } from './plat-responsable/modals/detail-p/detail-p.service';
import { CPlatService } from './plat-responsable/modals/CPlat/cplat.service';
import { CplatComponent } from './plat-responsable/modals/CPlat/cplat.component';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { SupprimerComponent } from './plat-responsable/modals/supprimer/supprimer.component';
import { DetailPComponent } from './plat-responsable/modals/detail-p/detail-p.component';
import { UplatComponent } from './plat-responsable/modals/UPlat/uplat.component';
import { UPlatService } from './plat-responsable/modals/UPlat/uplat.service';
import { CBoissonComponent } from './boisson-responsable/modals/Cboisson/cBoisson.component';
import { UBoissonComponent } from './boisson-responsable/modals/UBoisson/uBoisson.component';
import { CBoissonService } from './boisson-responsable/modals/Cboisson/cBoisson.service';
import { UBoissonService } from './boisson-responsable/modals/UBoisson/uBoisson.service';
import { SupprimerBComponent } from './boisson-responsable/modals/supprimer/supprimerB.component';
import { BoissonResponsableService } from './boisson-responsable/boisson-responsable.service';
import { DPersonnelComponent } from 'src/app/modals/CrudPersonnel/DPersonnel/dpersonnel.component';
import { DPersonnelService } from 'src/app/modals/CrudPersonnel/DPersonnel/dpersonnel.service';
import { CSrecetteComponent } from './srecette-responsable/modals/C-srecette/csrecette.component';
import { CSrecetteService } from './srecette-responsable/modals/C-srecette/csrecette.service';
import { DetailSService } from './srecette-responsable/modals/detail-s/detail-s.service';
import { IngredientResponsableComponent } from './ingredient-responsable/ingredient-responsable.component';
import { CIngredientComponent } from './ingredient-responsable/modals/CIngredient/cIngredient.component';
import { CIngredientService } from './ingredient-responsable/modals/CIngredient/cIngredient.service';
import { UIngredientService } from './ingredient-responsable/modals/UIngredient/uIngredient.service';
import { IngredientResponsableService } from './ingredient-responsable/ingredient-responsable.service';
import { UIngredientComponent } from './ingredient-responsable/modals/UIngredient/uIngredient.component';
import { SupprimerSComponent } from './srecette-responsable/modals/supprimer/supprimer.component';
import { USrecetteComponent } from './srecette-responsable/modals/USrecette/usrecette.component';
import { USrecetteService } from './srecette-responsable/modals/USrecette/usrecette.service';
import { SupprimerIComponent } from './ingredient-responsable/modals/supprimer/supprimerI.component';
NavigationResponsableComponent;
@NgModule({
  declarations: [
    ResponsableComponent,
    PersonnelResponsableComponent,
    ReservationResponsableComponent,
    IngredientResponsableComponent,
    SrecettesResponsableComponent,
    BoissonResponsableComponent,
    AcceuilResponsableComponent,
    PlatResponsableComponent,
    InventaireResponsableComponent,
    NavigationResponsableComponent,
    DPersonnelComponent,
    CplatComponent,
    SupprimerComponent,
    DetailPComponent,
    UplatComponent, 
    CBoissonComponent,
    CIngredientComponent,
     SupprimerBComponent, 
     UBoissonComponent
    , CSrecetteComponent
    , 
    IngredientResponsableComponent,
    UIngredientComponent,    
    SupprimerSComponent,
    USrecetteComponent,
    SupprimerIComponent

    //pipes


  ],
  imports: [
    CommonModule,
     ResponsableRoutingModule,
    NavBarModule, 
    FlexLayoutModule,
     MatangModule,
      MatTableModule,
    PipesModule.forRoot(),
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
  entryComponents: [
    USrecetteComponent,
    SupprimerSComponent,
    CIngredientComponent,
    CSrecetteComponent,
    DPersonnelComponent,
    CplatComponent,
    SupprimerComponent,
    DetailPComponent,
    UplatComponent,
    CBoissonComponent,
    SupprimerBComponent,
    SupprimerIComponent,
    UBoissonComponent,
    UIngredientComponent],
  exports: [],
  providers: [
    CIngredientService,
    UIngredientService,
    DetailSService,
    CSrecetteService,
    BoissonResponsableService,
    DPersonnelService,
    CPersonnelService,
    PlatResponsableService,
    DetailPService,
    CPlatService,
    UPlatService,
    CBoissonService,
    UBoissonService,
    IngredientResponsableService,
    USrecetteService]
})
export class ResponsableModule { }

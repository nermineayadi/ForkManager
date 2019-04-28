
//important
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CuisinierComponent } from "./cuisinier.component";
//childs of cuisinier
import { PlatCuisineComponent } from "./plat-cuisine/plat-cuisine.component";
import { StockCuisineComponent } from "./stock-cuisine/stock-cuisine.component";
import { MenuCuisineComponent } from "./menu-cuisine/menu-cuisine.component";
import { ReservationCuisineComponent } from "./reservation-cuisine/reservation-cuisine.component";
import { CommandeCuisineComponent } from "./commande-cuisine/commande-cuisine.component";
import { InventaireCuisineComponent } from "./inventaire-cuisine/inventaire-cuisine.component";
import { AcceuilCuisineComponent } from "./acceuil-cuisine/acceuil-cuisine.component";
import { cuisineRoutingModule } from "./cuisinier-routing.module";

//assets
import { MatangModule } from "src/assets/matang.module";
//calendar
import { CalendarModule, DateAdapter } from "angular-calendar";
import { adapterFactory } from "angular-calendar/date-adapters/date-fns";
import { NgbModule, NgbModalModule } from "@ng-bootstrap/ng-bootstrap";
import { FlatpickrModule } from "angularx-flatpickr";
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavBarModule } from 'src/app/navbar/navbar.module';
import { NavigationCuisineComponent } from 'src/app/navigation/navigation-cuisine/navigation-cuisine.component';
import { PlatService } from './plat-cuisine/plat.service';
import { CPlatService } from './modals/CPlat/cplat.service';
import { MatDialogModule } from '@angular/material';
import { DetailPService } from './modals/detail-p/detail-p.service';
import { CplatComponent } from './modals/CPlat/cplat.component';
import { SupprimerComponent } from './modals/supprimer/supprimer.component';
import { DetailPComponent } from './modals/detail-p/detail-p.component';
import { SfamillePipe } from 'src/app/pipes/sfamille.pipe';
import { FamillePipe } from 'src/app/pipes/famille.pipe';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  declarations: [ 
    //important
    CuisinierComponent,
    //childs of cuisinier
    PlatCuisineComponent,
    StockCuisineComponent,
    MenuCuisineComponent,
    ReservationCuisineComponent,
    CommandeCuisineComponent,
    InventaireCuisineComponent,
    AcceuilCuisineComponent,
    NavigationCuisineComponent,
    SupprimerComponent , CplatComponent , DetailPComponent,
  
    
  ],
  imports: [


    //important
    CommonModule,
    cuisineRoutingModule,
    MatangModule, 
    NavBarModule,
    MatDialogModule,
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
    PipesModule

  ],
  entryComponents: [
    SupprimerComponent , CplatComponent , DetailPComponent
  ],
  
  exports: [],
  providers: [CPlatService , PlatService , DetailPService]
})
export class CuisineModule {}

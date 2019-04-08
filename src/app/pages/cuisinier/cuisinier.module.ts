
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
import { MDBBootstrapModule } from 'angular-bootstrap-md';

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
    NavigationCuisineComponent
    
  ],
  imports: [
    MDBBootstrapModule.forRoot(),

    //important
    CommonModule,
    cuisineRoutingModule,
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
export class CuisineModule {}

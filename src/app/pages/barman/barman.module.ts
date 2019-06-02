import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarmanRoutingModule } from './barman-routing.module';
import { BarmanComponent } from './barman.component';
//childs of barman
import { BoissonBarComponent } from './boisson-bar/boisson-bar.component';
import { StockBarComponent } from './stock-bar/stock-bar.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { ReservationBarComponent } from './reservation-bar/reservation-bar.component';
import { CommandeBarComponent } from './commande-bar.service.ts/commande-bar.component';
import { InventraireBarComponent } from './inventraire-bar/inventraire-bar.component';
import { AcceuilBarComponent } from './acceuil-bar/acceuil-bar.component';
//assets
import { MatangModule } from "src/assets/matang.module";
//calendar
import { CalendarModule, DateAdapter } from "angular-calendar";
import { adapterFactory } from "angular-calendar/date-adapters/date-fns";
import { NgbModule, NgbModalModule } from "@ng-bootstrap/ng-bootstrap";
import { FlatpickrModule } from "angularx-flatpickr";
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavBarModule } from 'src/app/navbar/navbar.module';
import { NavigationBarComponent } from 'src/app/navigation/navigation-bar/navigation-bar.component';
import{MDBBootstrapModule }from 'angular-bootstrap-md'
import { CmdBarService } from './commande-bar.service.ts/commande-bar.service';
import { InventaireBService } from 'src/app/modals/CrudIventaire/InventaireB/InventaireB.service';
@NgModule({
    declarations: [
        BarmanComponent,
        BoissonBarComponent,
        StockBarComponent,
        MenuBarComponent,
        ReservationBarComponent,
        CommandeBarComponent,
        InventraireBarComponent,
        NavigationBarComponent,
        AcceuilBarComponent],
    imports: [MDBBootstrapModule,
        CommonModule,
        BarmanRoutingModule,
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
    providers: [CmdBarService,InventaireBService],
})
export class BarmanModule { }
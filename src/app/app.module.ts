import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ThemeComponent } from "./theme/theme.component";
import { PagesComponent } from "./pages/pages.component";
import { ReprestComponent } from "./pages/represt/represt.component";
import { ControlgestionComponent } from "./pages/controlgestion/controlgestion.component";
import { BarmanComponent } from "./pages/barman/barman.component";
import { ServeurComponent } from "./pages/serveur/serveur.component";
import { PortionneurComponent } from "./pages/portionneur/portionneur.component";
import { RespcomptoireComponent } from "./pages/respcomptoire/respcomptoire.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CuisinierComponent } from "./pages/cuisinier/cuisinier.component";
import { GrowlModule } from "primeng/primeng";
import { AccordionModule } from "primeng/accordion";
import { SidebarModule } from "primeng/sidebar";
import { MatButtonModule } from "@angular/material/button";
import { NavigationComponent } from "./navigation/navigation.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { LoginComponent } from "./auth/login/login.component";
import { MatangModule } from "../assets/matang.module";
import * as $ from "jquery";
import { InscriptionComponent } from "./auth/inscription/inscription.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material";
import { SearchbarComponent } from "./searchbar/searchbar.component";
import { RecetteComponent } from "./pages/cuisinier/recette/recette.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { CplatComponent } from "./modals/CrudPlat/CPlat/cplat.component";
import { StockComponent } from "./pages/cuisinier/stock/stock.component";
import { MenuComponent } from "./pages/cuisinier/menu/menu.component";
import { ReservationComponent } from "./pages/cuisinier/reservation/reservation.component";
import { CommandeComponent } from "./pages/cuisinier/commande/commande.component";
import { InventaireComponent } from "./pages/cuisinier/inventaire/inventaire.component";
import { AcceuilComponent } from "./pages/cuisinier/acceuil/acceuil.component";
import { CalendarModule, DateAdapter } from "angular-calendar";
import { adapterFactory } from "angular-calendar/date-adapters/date-fns";
import { NgbModule, NgbModalModule } from "@ng-bootstrap/ng-bootstrap";

import { FlatpickrModule } from "angularx-flatpickr";
import { CommonModule } from "@angular/common";
import { AngularFireModule } from "@angular/fire";
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from "../environments/environment";
@NgModule({
  declarations: [
    AppComponent,
    ThemeComponent,
    PagesComponent,
    CuisinierComponent,
    ReprestComponent,
    ControlgestionComponent,
    BarmanComponent,
    ServeurComponent,
    PortionneurComponent,
    NavigationComponent,
    NavbarComponent,
    InscriptionComponent,
    SearchbarComponent,
    RespcomptoireComponent,
    LoginComponent,
    RecetteComponent,
    CplatComponent,
    StockComponent,
    MenuComponent,
    ReservationComponent,
    CommandeComponent,
    InventaireComponent,
    AcceuilComponent
  ],
  imports: [
    AngularFireAuthModule,
    AngularFireStorageModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    GrowlModule,
    AccordionModule,
    SidebarModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatangModule,
    HttpClientModule,
    FlexLayoutModule,
    AppRoutingModule,
    FlatpickrModule,
    FlatpickrModule.forRoot(),
    FormsModule,
    NgbModule,
    CommonModule,
    FormsModule,
    NgbModalModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  entryComponents: [CplatComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
